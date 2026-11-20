/**
 * GET /api/admin/learners — download every learner who gave their details in
 * the welcome quiz popup, as a CSV file (admin only).
 */
import { NextResponse } from 'next/server'
import { getAdminUser } from '@/lib/admin'
import { createAdminClient } from '@/lib/supabase-admin'

export const dynamic = 'force-dynamic'

/** Quote a CSV field, and defuse spreadsheet formulas (=, +, -, @) in user-typed text. */
function csv(value: unknown): string {
  let s = value == null ? '' : String(value)
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`
  return `"${s.replace(/"/g, '""')}"`
}

export async function GET() {
  const admin = await getAdminUser()
  if (!admin) return NextResponse.json({ error: 'Unauthorised.' }, { status: 401 })

  const { data, error } = await createAdminClient()
    .from('learner_leads')
    .select('name,email,phone,from_durban,attempts,best_score,passed,passed_at,created_at')
    .order('created_at', { ascending: false })
    .limit(50000)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const header = ['Name', 'Email', 'Phone', 'From Durban', 'Quiz attempts', 'Best score (of 5)', 'Passed', 'Passed at', 'Registered at']
  const rows = (data ?? []).map(l => [
    l.name, l.email, l.phone,
    l.from_durban == null ? '' : l.from_durban ? 'Yes' : 'No',
    l.attempts, l.best_score ?? '', l.passed ? 'Yes' : 'No', l.passed_at ?? '', l.created_at,
  ].map(csv).join(','))

  const body = '﻿' + [header.map(csv).join(','), ...rows].join('\r\n') + '\r\n'
  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="learners-${new Date().toISOString().slice(0, 10)}.csv"`,
      'Cache-Control': 'no-store',
    },
  })
}
