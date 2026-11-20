'use client'

/**
 * WelcomeQuizPopup — the compulsory gate before practising.
 *
 * Shown on every full page load (every refresh) except admin, sign-in and payment pages.
 * without access, on every full page load. It can't be dismissed:
 *
 *   1. Read     — the school's history, with a note that the practice platform
 *                 is free once the quiz is passed.
 *   2. Details  — name, email and phone number, stored on the server so the
 *                 school can export them later (skipped if already given).
 *   3. Quiz     — "Are you from Durban?" (recorded, not scored) plus five
 *                 scored multiple-choice questions.
 *   4. Result   — 80% or more unlocks the practice quizzes. Anyone who fails
 *                 can restart (read again, new shuffle) as often as they like.
 *
 * Questions are fetched from /api/welcome-quiz and scored on the server, which
 * also issues the signed pass cookie, so answers never reach the browser.
 * Visitors with full access or a valid pass never see it.
 */
import { useEffect, useState } from 'react'
import { isSchoolPage } from '@/lib/locations'
import {
  SCHOOL_NAME, SCHOOL_FOUNDED_YEAR, SCHOOL_YEARS, SCHOOL_DRIVERS_LICENSED_LABEL,
  SCHOOL_PHONE_DISPLAY, SCHOOL_PHONE_TEL, SCHOOL_ADDRESS_LINES, SCHOOL_MAP_URL,
} from '@/lib/school'

/** Pages where the popup never appears (admin, sign-in and payment flows). */
const NEVER_PREFIXES = ['/admin', '/login', '/register', '/signup', '/forgot-password', '/reset-password', '/subscribe', '/auth', '/access-code']
/** Set just before reloading after a pass, so the popup doesn't greet the learner again straight away. */
const PASSED_FLAG = 'sk_welcome_just_passed'
const DURBAN_WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/CmUQ51EvQri6u8r8aT1JKR?s=cl&p=a&iam=2'

interface Question { id: string; prompt: string; options: { id: string; label: string }[] }
type Step = 'read' | 'details' | 'quiz' | 'result'

function shuffled<T>(items: T[]): T[] {
  const a = [...items]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function fmtDuration(minutes: number): string {
  if (minutes % 60 === 0) {
    const h = minutes / 60
    return h === 1 ? '1 hour' : `${h} hours`
  }
  return `${minutes} minutes`
}

const inputClass = 'w-full rounded-xl border-2 border-gray-200 px-3 py-2.5 text-sm text-gray-900 focus:border-brand-600 focus:outline-none'

export default function WelcomeQuizPopup() {
  const [open, setOpen] = useState(false)
  // Compulsory for anyone without access on the practice platform. Visitors who
  // already have access (passed, paid, admin) and visitors on the school's own
  // pages see the same popup on every refresh but can close it.
  const [dismissible, setDismissible] = useState(false)
  const [step, setStep] = useState<Step>('read')
  const [questions, setQuestions] = useState<Question[]>([])
  const [passPercent, setPassPercent] = useState(80)
  const [passMinutes, setPassMinutes] = useState(60)
  const [registered, setRegistered] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [fromDurban, setFromDurban] = useState<'yes' | 'no' | ''>('')
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<{ score: number; total: number; passed: boolean } | null>(null)

  function load(): Promise<{ show: boolean; hasAccess: boolean }> {
    return fetch('/api/welcome-quiz', { cache: 'no-store' })
      .then(r => r.json())
      .then(d => {
        setQuestions((d.questions as Question[]).map(q => ({ ...q, options: shuffled(q.options) })))
        setPassPercent(d.passPercent ?? 80)
        setPassMinutes(d.passMinutes ?? 60)
        setRegistered(!!d.registered)
        return { show: true, hasAccess: !!d.hasAccess }
      })
  }

  useEffect(() => {
    const path = window.location.pathname
    if (NEVER_PREFIXES.some(p => path.startsWith(p))) return
    try {
      if (sessionStorage.getItem(PASSED_FLAG)) { sessionStorage.removeItem(PASSED_FLAG); return }
    } catch {}
    let cancelled = false
    load()
      .then(({ hasAccess }) => {
        // Don't interrupt a quiz in progress for someone who already has access.
        if (hasAccess && path.startsWith('/quiz')) return
        if (cancelled) return
        setDismissible(hasAccess || isSchoolPage(path))
        setOpen(true)
      })
      .catch(() => { /* if the check fails, don't block the page */ })
    return () => { cancelled = true }
  }, [])

  // Lock page scroll behind the popup.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [open])

  async function restart() {
    setAnswers({}); setFromDurban(''); setResult(null); setError(''); setStep('read')
    try { await load() } catch { /* keep the old questions */ }
  }

  async function saveDetails() {
    setBusy(true); setError('')
    try {
      const res = await fetch('/api/welcome-quiz', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ action: 'register', ...form }),
      })
      const d = await res.json().catch(() => ({}))
      if (!res.ok) { setError(d.error ?? 'Could not save your details. Please try again.'); return }
      setRegistered(true)
      setStep('quiz')
    } catch {
      setError('Could not save your details. Please check your connection and try again.')
    } finally {
      setBusy(false)
    }
  }

  async function submit() {
    setBusy(true); setError('')
    try {
      const res = await fetch('/api/welcome-quiz', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ action: 'submit', answers, fromDurban }),
      })
      const d = await res.json().catch(() => ({}))
      if (!res.ok) {
        if (d.needsDetails) { setRegistered(false); setStep('details') }
        setError(d.error ?? 'Could not check your answers. Please try again.')
        return
      }
      setResult({ score: d.score, total: d.total, passed: d.passed })
      setStep('result')
    } catch {
      setError('Could not check your answers. Please check your connection and try again.')
    } finally {
      setBusy(false)
    }
  }

  if (!open) return null

  const detailsOk = form.name.trim().length >= 2 && /\S+@\S+\.\S+/.test(form.email) && form.phone.replace(/\D/g, '').length >= 9
  const quizOk = fromDurban !== '' && questions.length > 0 && questions.every(q => answers[q.id])
  const stepLabel = { read: 'Welcome · Step 1 of 3', details: 'Your details · Step 2 of 3', quiz: 'Quick quiz · Step 3 of 3', result: 'Your result' }[step]
  const title = {
    read: `About ${SCHOOL_NAME}`,
    details: 'Tell us who you are',
    quiz: 'Test what you just read',
    result: result?.passed ? 'Well done!' : 'Not quite yet',
  }[step]

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center px-3 py-4" role="dialog" aria-modal="true" aria-labelledby="welcome-popup-title">
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative flex max-h-[92vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="relative shrink-0 bg-brand-700 px-6 pb-5 pt-6 text-center text-white">
          {dismissible && (
            <button onClick={() => setOpen(false)} aria-label="Close" className="absolute right-4 top-3 text-2xl leading-none text-brand-200 hover:text-white">×</button>
          )}
          <span className="mb-2 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-100">{stepLabel}</span>
          <h2 id="welcome-popup-title" className="text-2xl font-extrabold">{title}</h2>
        </div>

        <div className="overflow-y-auto px-6 py-5">
          {step === 'read' && (
            <div className="space-y-5 text-sm leading-relaxed text-gray-700">
              <p className="rounded-xl border border-green-200 bg-green-50 px-3 py-2 font-semibold text-green-900">
                To access the learner’s licence quiz for free, read the details below first, then answer the quiz. You will access the practice platform free after the quiz.
              </p>

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
                The quiz is compulsory. Score {passPercent}% or more and you get full access to the practice quizzes for {fmtDuration(passMinutes)}.
                If you don’t pass, you can restart and try again.
              </p>
            </div>
          )}

          {step === 'details' && (
            <form id="details-form" onSubmit={e => { e.preventDefault(); if (detailsOk && !busy) saveDetails() }} className="space-y-4">
              <p className="text-sm text-gray-600">We need these before you start practising. We’ll only use them to help you with your learner’s licence.</p>
              <label className="block text-sm font-semibold text-gray-800">
                Full name
                <input className={`${inputClass} mt-1`} autoComplete="name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="e.g. Thandi Nkosi" />
              </label>
              <label className="block text-sm font-semibold text-gray-800">
                Email address
                <input className={`${inputClass} mt-1`} type="email" autoComplete="email" inputMode="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="you@example.com" />
              </label>
              <label className="block text-sm font-semibold text-gray-800">
                Phone number
                <input className={`${inputClass} mt-1`} type="tel" autoComplete="tel" inputMode="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="e.g. 076 754 5780" />
              </label>
              {error && <p className="text-sm text-red-600">{error}</p>}
            </form>
          )}

          {step === 'quiz' && (
            <div className="space-y-6">
              <fieldset>
                <legend className="mb-2 text-sm font-bold text-gray-900">Are you from Durban? <span className="font-normal text-gray-400">(not scored)</span></legend>
                <div className="grid grid-cols-2 gap-2">
                  {([['yes', 'Yes, I’m from Durban'], ['no', 'No, somewhere else']] as const).map(([v, label]) => (
                    <label key={v} className={`flex cursor-pointer items-center gap-2 rounded-xl border-2 px-3 py-2.5 text-sm transition-colors ${fromDurban === v ? 'border-brand-600 bg-brand-50 font-semibold text-brand-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                      <input type="radio" name="from-durban" value={v} checked={fromDurban === v} onChange={() => setFromDurban(v)} className="h-4 w-4 accent-red-600" />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>

              {questions.map((q, i) => (
                <fieldset key={q.id}>
                  <legend className="mb-2 text-sm font-bold text-gray-900">{i + 1}. {q.prompt}</legend>
                  <div className="space-y-2">
                    {q.options.map(o => {
                      const selected = answers[q.id] === o.id
                      return (
                        <label key={o.id} className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 px-3 py-2.5 text-sm transition-colors ${selected ? 'border-brand-600 bg-brand-50 font-semibold text-brand-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                          <input type="radio" name={`welcome-${q.id}`} value={o.id} checked={selected} onChange={() => setAnswers(a => ({ ...a, [q.id]: o.id }))} className="h-4 w-4 accent-red-600" />
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
                  ? `You now have free access to the practice quizzes for ${fmtDuration(passMinutes)}.`
                  : 'You need to pass the quiz before you can practise. Restart, read the details again and have another go.'}
              </p>
              {result.passed && fromDurban === 'yes' && (
                <a href={DURBAN_WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block rounded-xl border-2 border-green-600 px-4 py-2.5 text-sm font-semibold text-green-800 hover:bg-green-50">
                  Join our Durban learners’ WhatsApp group
                </a>
              )}
            </div>
          )}
        </div>

        <div className="shrink-0 space-y-2 border-t border-gray-100 px-6 py-4">
          {step === 'read' && (
            <>
              <button onClick={() => { setError(''); setStep(registered ? 'quiz' : 'details') }} disabled={questions.length === 0} className="w-full rounded-xl bg-brand-600 py-3 font-bold text-white transition-colors hover:bg-brand-700 disabled:opacity-60">
                I’ve read it — continue →
              </button>
              {dismissible && (
                <button onClick={() => setOpen(false)} className="w-full py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Close</button>
              )}
            </>
          )}
          {step === 'details' && (
            <>
              <button type="submit" form="details-form" disabled={!detailsOk || busy} className="w-full rounded-xl bg-brand-600 py-3 font-bold text-white transition-colors hover:bg-brand-700 disabled:opacity-50">
                {busy ? 'Saving…' : 'Save and take the quiz →'}
              </button>
              <button onClick={() => setStep('read')} className="w-full py-2 text-sm font-medium text-gray-500 hover:text-gray-700">← Back</button>
            </>
          )}
          {step === 'quiz' && (
            <>
              <button onClick={submit} disabled={!quizOk || busy} className="w-full rounded-xl bg-brand-600 py-3 font-bold text-white transition-colors hover:bg-brand-700 disabled:opacity-50">
                {busy ? 'Checking…' : quizOk ? 'Submit answers' : 'Answer every question to submit'}
              </button>
              <button onClick={() => setStep('read')} className="w-full py-2 text-sm font-medium text-gray-500 hover:text-gray-700">← Back to the details</button>
            </>
          )}
          {step === 'result' && result?.passed && (
            <button onClick={() => { try { sessionStorage.setItem(PASSED_FLAG, '1') } catch {} setOpen(false); window.location.reload() }} className="w-full rounded-xl bg-green-600 py-3 font-bold text-white transition-colors hover:bg-green-700">
              Start practising →
            </button>
          )}
          {step === 'result' && !result?.passed && (
            <button onClick={restart} className="w-full rounded-xl bg-brand-600 py-3 font-bold text-white transition-colors hover:bg-brand-700">
              Restart the quiz
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
