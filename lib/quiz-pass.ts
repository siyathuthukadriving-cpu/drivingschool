/**
 * lib/quiz-pass.ts — the "welcome quiz" pass.
 *
 * A visitor who scores 80% or more on the welcome quiz is given an httpOnly,
 * HMAC-signed cookie that unlocks the practice quizzes for a limited time.
 * The cookie is signed on the server and the quiz is scored on the server, so
 * it cannot be forged or extended from the browser.
 *
 * Server-only (uses next/headers and node:crypto).
 */
import { createHmac, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'

export const QUIZ_PASS_COOKIE = 'sk_quiz_pass'
/** How long a passed welcome quiz unlocks the practice quizzes. */
export const QUIZ_PASS_MINUTES = 60

function secret(): string {
  return process.env.QUIZ_PASS_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY || ''
}

function sign(expiresAt: number): string {
  return createHmac('sha256', secret()).update(`quiz-pass:${expiresAt}`).digest('hex')
}

/** A new signed token valid for QUIZ_PASS_MINUTES from now. */
export function createQuizPassToken(): { value: string; maxAgeSeconds: number } {
  const expiresAt = Date.now() + QUIZ_PASS_MINUTES * 60 * 1000
  return { value: `${expiresAt}.${sign(expiresAt)}`, maxAgeSeconds: QUIZ_PASS_MINUTES * 60 }
}

/** True when the token is correctly signed and not yet expired. */
export function verifyQuizPassToken(token: string | undefined | null): boolean {
  if (!token || !secret()) return false
  const [expiresRaw, mac] = token.split('.')
  const expiresAt = Number(expiresRaw)
  if (!mac || !Number.isFinite(expiresAt) || expiresAt <= Date.now()) return false
  const expected = Buffer.from(sign(expiresAt), 'hex')
  const given = Buffer.from(mac, 'hex')
  return given.length === expected.length && timingSafeEqual(given, expected)
}

/** Whether the current visitor holds a valid welcome-quiz pass. */
export function hasQuizPass(): boolean {
  try {
    return verifyQuizPassToken(cookies().get(QUIZ_PASS_COOKIE)?.value)
  } catch {
    return false
  }
}
