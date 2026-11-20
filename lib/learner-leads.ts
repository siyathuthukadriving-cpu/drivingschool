/**
 * lib/learner-leads.ts — validation helpers for the learner details form
 * (name, email, phone) captured by the welcome quiz popup.
 */

export const LEAD_COOKIE = 'sk_lead'

export interface LeadInput { name: string; email: string; phone: string }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Validate and normalise the form. Returns an error message or the clean values. */
export function parseLeadInput(body: any): { error: string } | { value: LeadInput } {
  const name = String(body?.name ?? '').trim().replace(/\s+/g, ' ')
  const email = String(body?.email ?? '').trim().toLowerCase()
  const phoneRaw = String(body?.phone ?? '').trim()

  if (name.length < 2 || name.length > 100) return { error: 'Please enter your name.' }
  if (!EMAIL_RE.test(email) || email.length > 200) return { error: 'Please enter a valid email address.' }

  const digits = phoneRaw.replace(/[^\d]/g, '')
  if (digits.length < 9 || digits.length > 15 || !/^[+\d\s()-]+$/.test(phoneRaw)) {
    return { error: 'Please enter a valid phone number.' }
  }
  return { value: { name, email, phone: phoneRaw } }
}
