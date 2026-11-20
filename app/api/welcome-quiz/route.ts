/**
 * Welcome quiz API.
 *
 * GET  → { hasAccess, registered, name, questions, passPercent, passMinutes }
 * POST { action: 'register', name, email, phone }
 *        Stores the learner's details (upsert by email) and remembers them in an
 *        httpOnly cookie. → { ok: true, name }
 * POST { action: 'submit', answers, fromDurban }
 *        Scores the quiz on the server, records the attempt and the learner's
 *        "from Durban" answer, and on 80%+ sets a signed pass cookie that
 *        unlocks the practice quizzes. → { score, total, passed, passMinutes }
 *
 * Only the server touches the learner_leads table (service role).
 */
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createAdminClient } from '@/lib/supabase-admin'
import { hasQuizAccess } from '@/lib/access'
import { publicQuestions, scoreWelcomeQuiz, WELCOME_QUIZ_PASS_FRACTION } from '@/lib/welcome-quiz'
import { QUIZ_PASS_COOKIE, QUIZ_PASS_MINUTES, createQuizPassToken } from '@/lib/quiz-pass'
import { LEAD_COOKIE, parseLeadInput } from '@/lib/learner-leads'

export const dynamic = 'force-dynamic'
const NO_STORE = { 'Cache-Control': 'no-store' }
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

function leadIdFromCookie(): string | null {
  const v = cookies().get(LEAD_COOKIE)?.value
  return v && UUID_RE.test(v) ? v : null
}

export async function GET() {
  let registered = false
  let name = ''
  const leadId = leadIdFromCookie()
  if (leadId) {
    try {
      const { data } = await createAdminClient().from('learner_leads').select('name').eq('id', leadId).maybeSingle()
      if (data) { registered = true; name = data.name }
    } catch { /* treat as not registered */ }
  }
  return NextResponse.json({
    hasAccess: await hasQuizAccess(),
    registered,
    name,
    questions: publicQuestions(),
    passPercent: Math.round(WELCOME_QUIZ_PASS_FRACTION * 100),
    passMinutes: QUIZ_PASS_MINUTES,
  }, { headers: NO_STORE })
}

export async function POST(req: NextRequest) {
  let body: any
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid body.' }, { status: 400, headers: NO_STORE })
  }

  const db = createAdminClient()

  // ── Step 2: store the learner's details ───────────────────────────────
  if (body?.action === 'register') {
    const parsed = parseLeadInput(body)
    if ('error' in parsed) return NextResponse.json({ error: parsed.error }, { status: 400, headers: NO_STORE })
    const { name, email, phone } = parsed.value

    const { data, error } = await db
      .from('learner_leads')
      .upsert({ name, email, phone, updated_at: new Date().toISOString() }, { onConflict: 'email' })
      .select('id')
      .single()
    if (error || !data) {
      console.error('[welcome-quiz] could not save learner details:', error?.message)
      return NextResponse.json({ error: 'Could not save your details. Please try again.' }, { status: 500, headers: NO_STORE })
    }

    const res = NextResponse.json({ ok: true, name }, { headers: NO_STORE })
    res.cookies.set(LEAD_COOKIE, data.id, {
      httpOnly: true,
      sameSite: 'lax',
      secure: req.nextUrl.protocol === 'https:',
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    })
    return res
  }

  // ── Step 3: score the quiz ────────────────────────────────────────────
  if (body?.action === 'submit') {
    const leadId = leadIdFromCookie()
    if (!leadId) {
      return NextResponse.json({ error: 'Please enter your details first.', needsDetails: true }, { status: 400, headers: NO_STORE })
    }
    const fromDurban = body.fromDurban === 'yes' ? true : body.fromDurban === 'no' ? false : null
    if (fromDurban === null) {
      return NextResponse.json({ error: 'Please say whether you are from Durban.' }, { status: 400, headers: NO_STORE })
    }

    const result = scoreWelcomeQuiz(body.answers)

    const { data: lead } = await db
      .from('learner_leads')
      .select('attempts,best_score,passed,passed_at')
      .eq('id', leadId)
      .maybeSingle()
    if (!lead) {
      return NextResponse.json({ error: 'Please enter your details first.', needsDetails: true }, { status: 400, headers: NO_STORE })
    }

    const now = new Date().toISOString()
    const { error: updateError } = await db
      .from('learner_leads')
      .update({
        from_durban: fromDurban,
        attempts: (lead.attempts ?? 0) + 1,
        best_score: Math.max(lead.best_score ?? 0, result.score),
        passed: lead.passed || result.passed,
        passed_at: lead.passed_at ?? (result.passed ? now : null),
        updated_at: now,
      })
      .eq('id', leadId)
    if (updateError) console.error('[welcome-quiz] could not record attempt:', updateError.message)

    const res = NextResponse.json({ ...result, passMinutes: QUIZ_PASS_MINUTES }, { headers: NO_STORE })
    if (result.passed) {
      const { value, maxAgeSeconds } = createQuizPassToken()
      res.cookies.set(QUIZ_PASS_COOKIE, value, {
        httpOnly: true,
        sameSite: 'lax',
        secure: req.nextUrl.protocol === 'https:',
        path: '/',
        maxAge: maxAgeSeconds,
      })
    }
    return res
  }

  return NextResponse.json({ error: 'Unknown action.' }, { status: 400, headers: NO_STORE })
}
