/**
 * GET  /api/welcome-quiz → { hasPass, questions, passPercent, passMinutes }
 * POST /api/welcome-quiz  { answers: { [questionId]: optionId } }
 *      → { score, total, passed, passMinutes }
 *
 * Scores the welcome quiz on the server. A score of 80% or more sets a signed
 * httpOnly cookie that unlocks the practice quizzes for QUIZ_PASS_MINUTES.
 */
import { NextRequest, NextResponse } from 'next/server'
import { publicQuestions, scoreWelcomeQuiz, WELCOME_QUIZ_PASS_FRACTION } from '@/lib/welcome-quiz'
import { QUIZ_PASS_COOKIE, QUIZ_PASS_MINUTES, createQuizPassToken, hasQuizPass } from '@/lib/quiz-pass'

export const dynamic = 'force-dynamic'
const NO_STORE = { 'Cache-Control': 'no-store' }

export async function GET() {
  return NextResponse.json({
    hasPass: hasQuizPass(),
    questions: publicQuestions(),
    passPercent: Math.round(WELCOME_QUIZ_PASS_FRACTION * 100),
    passMinutes: QUIZ_PASS_MINUTES,
  }, { headers: NO_STORE })
}

export async function POST(req: NextRequest) {
  let body: { answers?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid body.' }, { status: 400, headers: NO_STORE })
  }

  const result = scoreWelcomeQuiz(body.answers)
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
