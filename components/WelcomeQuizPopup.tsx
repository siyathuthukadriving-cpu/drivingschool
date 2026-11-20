'use client'

/**
 * WelcomeQuizPopup — shown on every full page load (so, every refresh).
 *
 *   1. "Read":   a short history of the school — founding year, years in
 *                operation, locations, phone numbers and address.
 *   2. "Quiz":   five multiple-choice questions about what was just read.
 *   3. "Result": 80% or more unlocks the practice quizzes for a limited time.
 *
 * The questions are fetched from /api/welcome-quiz and scored on the server,
 * which also issues the signed pass cookie, so the answers never ship to the
 * browser and the pass can't be forged. Visitors who already hold a valid pass
 * are not shown the popup again until it expires. It can always be skipped.
 *
 * Not shown on admin, sign-in, payment or in-progress quiz pages.
 */
import { useEffect, useState } from 'react'
import {
  SCHOOL_NAME, SCHOOL_FOUNDED_YEAR, SCHOOL_YEARS, SCHOOL_DRIVERS_LICENSED_LABEL,
  SCHOOL_PHONE_DISPLAY, SCHOOL_PHONE_TEL, SCHOOL_ADDRESS_LINES, SCHOOL_MAP_URL,
} from '@/lib/school'

const SKIP_PREFIXES = ['/admin', '/quiz', '/t/', '/login', '/register', '/signup', '/forgot-password', '/reset-password', '/subscribe', '/auth', '/access-code']

interface Question { id: string; prompt: string; options: { id: string; label: string }[] }
type Step = 'read' | 'quiz' | 'result'

function shuffled<T>(items: T[]): T[] {
  const a = [...items]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function WelcomeQuizPopup() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<Step>('read')
  const [questions, setQuestions] = useState<Question[]>([])
  const [passPercent, setPassPercent] = useState(80)
  const [passMinutes, setPassMinutes] = useState(60)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<{ score: number; total: number; passed: boolean } | null>(null)

  function load(): Promise<boolean> {
    return fetch('/api/welcome-quiz', { cache: 'no-store' })
      .then(r => r.json())
      .then(d => {
        if (d.hasPass) return false
        setQuestions((d.questions as Question[]).map(q => ({ ...q, options: shuffled(q.options) })))
        setPassPercent(d.passPercent ?? 80)
        setPassMinutes(d.passMinutes ?? 60)
        return true
      })
  }

  useEffect(() => {
    const path = window.location.pathname
    if (SKIP_PREFIXES.some(p => path.startsWith(p))) return

    // Tell the other popups to wait for this one.
    ;(window as any).__skWelcomeOpen = true
    let cancelled = false
    load()
      .then(show => {
        if (cancelled) return
        if (show) setOpen(true)
        else release()
      })
      .catch(() => { if (!cancelled) release() })
    return () => { cancelled = true }
  }, [])

  function release() {
    ;(window as any).__skWelcomeOpen = false
    window.dispatchEvent(new Event('sk-welcome-closed'))
  }

  function close() {
    setOpen(false)
    release()
  }

  async function retry() {
    setAnswers({}); setResult(null); setError(''); setStep('read')
    try { await load() } catch { /* keep the old questions */ }
  }

  async function submit() {
    setSubmitting(true); setError('')
    try {
      const res = await fetch('/api/welcome-quiz', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ answers }),
      })
      if (!res.ok) throw new Error()
      const d = await res.json()
      setResult({ score: d.score, total: d.total, passed: d.passed })
      setStep('result')
    } catch {
      setError('Could not check your answers. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) return null

  const allAnswered = questions.length > 0 && questions.every(q => answers[q.id])

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center px-3 py-4" role="dialog" aria-modal="true" aria-labelledby="welcome-popup-title">
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative flex max-h-[92vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* header */}
        <div className="relative shrink-0 bg-brand-700 px-6 pb-5 pt-6 text-center text-white">
          <button onClick={close} aria-label="Skip and close" className="absolute right-4 top-3 text-2xl leading-none text-brand-200 hover:text-white">×</button>
          <span className="mb-2 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-100">
            {step === 'read' ? 'Welcome · Step 1 of 2' : step === 'quiz' ? 'Quick quiz · Step 2 of 2' : 'Your result'}
          </span>
          <h2 id="welcome-popup-title" className="text-2xl font-extrabold">
            {step === 'read' ? `About ${SCHOOL_NAME}` : step === 'quiz' ? 'Test what you just read' : result?.passed ? 'Well done!' : 'Not quite yet'}
          </h2>
        </div>

        {/* body */}
        <div className="overflow-y-auto px-6 py-5">
          {step === 'read' && (
            <div className="space-y-5 text-sm leading-relaxed text-gray-700">
              <section>
                <h3 className="mb-1 text-xs font-bold uppercase tracking-widest text-brand-700">Our history</h3>
                <p>
                  {SCHOOL_NAME} has been teaching people to drive since <strong>{SCHOOL_FOUNDED_YEAR}</strong>, so we have been on KwaZulu-Natal
                  roads for <strong>{SCHOOL_YEARS} years</strong>. In that time we have helped <strong>{SCHOOL_DRIVERS_LICENSED_LABEL.toLowerCase()} drivers</strong> get
                  their licence. We teach Code 8 lessons, Code 10 and 14 truck training, motorcycle training and learner’s licence preparation.
                </p>
              </section>

              <section className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-brand-50 p-3 text-center"><div className="text-2xl font-extrabold text-brand-700">{SCHOOL_FOUNDED_YEAR}</div><div className="text-xs text-gray-500">Founded</div></div>
                <div className="rounded-xl bg-brand-50 p-3 text-center"><div className="text-2xl font-extrabold text-brand-700">{SCHOOL_YEARS}+</div><div className="text-xs text-gray-500">Years in operation</div></div>
                <div className="rounded-xl bg-brand-50 p-3 text-center"><div className="text-2xl font-extrabold text-brand-700">2000+</div><div className="text-xs text-gray-500">Drivers licensed since {SCHOOL_FOUNDED_YEAR}</div></div>
              </section>

              <section>
                <h3 className="mb-1 text-xs font-bold uppercase tracking-widest text-brand-700">Where we are</h3>
                <p>
                  We are based in Verulam, north of <strong>Durban</strong>, and teach learners from Durban, Durban CBD, Durban North and
                  across KwaZulu-Natal.
                </p>
              </section>

              <section>
                <h3 className="mb-1 text-xs font-bold uppercase tracking-widest text-brand-700">Contact us</h3>
                <p>
                  Phone or WhatsApp: <a href={`tel:${SCHOOL_PHONE_TEL}`} className="font-semibold text-brand-700 hover:underline">{SCHOOL_PHONE_DISPLAY}</a>
                </p>
                <p className="mt-1">
                  Address:{' '}
                  <a href={SCHOOL_MAP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 hover:underline">
                    {SCHOOL_ADDRESS_LINES.join(', ')}
                  </a>
                </p>
              </section>

              <p className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">
                Read the details above, then take the quick quiz. Score {passPercent}% or more and you get full access to the practice quizzes
                for {passMinutes} minutes.
              </p>
            </div>
          )}

          {step === 'quiz' && (
            <div className="space-y-5">
              {questions.map((q, i) => (
                <fieldset key={q.id}>
                  <legend className="mb-2 text-sm font-bold text-gray-900">{i + 1}. {q.prompt}</legend>
                  <div className="space-y-2">
                    {q.options.map(o => {
                      const selected = answers[q.id] === o.id
                      return (
                        <label
                          key={o.id}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 px-3 py-2.5 text-sm transition-colors ${selected ? 'border-brand-600 bg-brand-50 font-semibold text-brand-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}
                        >
                          <input
                            type="radio"
                            name={`welcome-${q.id}`}
                            value={o.id}
                            checked={selected}
                            onChange={() => setAnswers(a => ({ ...a, [q.id]: o.id }))}
                            className="h-4 w-4 accent-red-600"
                          />
                          {o.label}
                        </label>
                      )
                    })}
                  </div>
                </fieldset>
              ))}
              {error && <p className="text-sm text-red-600">{error}</p>}
            </div>
          )}

          {step === 'result' && result && (
            <div className="py-2 text-center">
              <div className="mb-2 text-5xl" aria-hidden="true">{result.passed ? '🎉' : '📖'}</div>
              <p className="text-3xl font-extrabold text-gray-900">{result.score} / {result.total}</p>
              <p className="mt-1 text-sm text-gray-500">{Math.round((result.score / result.total) * 100)}% · pass mark {passPercent}%</p>
              <p className="mt-4 text-sm text-gray-700">
                {result.passed
                  ? `You now have full access to the practice quizzes for ${passMinutes} minutes.`
                  : 'Read the details once more and try again, or carry on with the free preview.'}
              </p>
            </div>
          )}
        </div>

        {/* footer actions */}
        <div className="shrink-0 space-y-2 border-t border-gray-100 px-6 py-4">
          {step === 'read' && (
            <>
              <button onClick={() => setStep('quiz')} disabled={questions.length === 0} className="w-full rounded-xl bg-brand-600 py-3 font-bold text-white transition-colors hover:bg-brand-700 disabled:opacity-60">
                I’ve read it — take the quiz →
              </button>
              <button onClick={close} className="w-full py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Skip for now</button>
            </>
          )}
          {step === 'quiz' && (
            <>
              <button onClick={submit} disabled={!allAnswered || submitting} className="w-full rounded-xl bg-brand-600 py-3 font-bold text-white transition-colors hover:bg-brand-700 disabled:opacity-50">
                {submitting ? 'Checking…' : allAnswered ? 'Submit answers' : `Answer all ${questions.length} questions`}
              </button>
              <button onClick={() => setStep('read')} className="w-full py-2 text-sm font-medium text-gray-500 hover:text-gray-700">← Back to the details</button>
            </>
          )}
          {step === 'result' && result?.passed && (
            <button onClick={() => { close(); window.location.assign('/courses') }} className="w-full rounded-xl bg-green-600 py-3 font-bold text-white transition-colors hover:bg-green-700">
              Start practising →
            </button>
          )}
          {step === 'result' && !result?.passed && (
            <>
              <button onClick={retry} className="w-full rounded-xl bg-brand-600 py-3 font-bold text-white transition-colors hover:bg-brand-700">Read again and retry</button>
              <button onClick={close} className="w-full py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Continue with the free preview</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
