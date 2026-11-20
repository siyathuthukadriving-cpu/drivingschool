/**
 * /admin/learners — everyone who gave their name, email and phone number in
 * the welcome quiz popup, with whether they are from Durban and how the quiz
 * went. Admin only; the CSV button downloads the full list.
 */
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getAdminUser } from '@/lib/admin'
import { createAdminClient } from '@/lib/supabase-admin'

export const dynamic = 'force-dynamic'

const fmt = (iso: string | null) =>
  iso ? new Date(iso).toLocaleString('en-ZA', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Africa/Johannesburg' }) : '—'

export default async function LearnersPage() {
  const admin = await getAdminUser()
  if (!admin) redirect('/login')

  const db = createAdminClient()
  const [{ data: learners, error }, { count: total }, { count: durban }, { count: passed }] = await Promise.all([
    db.from('learner_leads')
      .select('id,name,email,phone,from_durban,attempts,best_score,passed,created_at')
      .order('created_at', { ascending: false })
      .limit(1000),
    db.from('learner_leads').select('id', { count: 'exact', head: true }),
    db.from('learner_leads').select('id', { count: 'exact', head: true }).eq('from_durban', true),
    db.from('learner_leads').select('id', { count: 'exact', head: true }).eq('passed', true),
  ])

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link href="/admin" className="text-sm font-semibold text-brand-700 hover:underline">← Admin</Link>
          <h1 className="mt-1 text-2xl font-extrabold text-gray-900">Learners</h1>
          <p className="text-sm text-gray-500">Details given in the welcome quiz before practising.</p>
        </div>
        <a href="/api/admin/learners" className="rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-700">
          Download CSV
        </a>
      </div>

      <div className="mb-6 grid grid-cols-3 gap-3 text-center">
        <div className="rounded-xl bg-white p-4 shadow-sm"><div className="text-2xl font-extrabold text-brand-700">{total ?? 0}</div><div className="text-xs text-gray-500">Learners</div></div>
        <div className="rounded-xl bg-white p-4 shadow-sm"><div className="text-2xl font-extrabold text-brand-700">{durban ?? 0}</div><div className="text-xs text-gray-500">From Durban</div></div>
        <div className="rounded-xl bg-white p-4 shadow-sm"><div className="text-2xl font-extrabold text-brand-700">{passed ?? 0}</div><div className="text-xs text-gray-500">Passed the quiz</div></div>
      </div>

      {error && <p className="mb-4 text-sm text-red-600">Could not load learners: {error.message}</p>}

      <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th className="px-4 py-3">Name</th><th className="px-4 py-3">Email</th><th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Durban</th><th className="px-4 py-3">Tries</th><th className="px-4 py-3">Best</th>
              <th className="px-4 py-3">Passed</th><th className="px-4 py-3">Registered</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {(learners ?? []).map(l => (
              <tr key={l.id}>
                <td className="px-4 py-2.5 font-semibold text-gray-900">{l.name}</td>
                <td className="px-4 py-2.5"><a href={`mailto:${l.email}`} className="text-brand-700 hover:underline">{l.email}</a></td>
                <td className="px-4 py-2.5"><a href={`tel:${l.phone}`} className="text-brand-700 hover:underline">{l.phone}</a></td>
                <td className="px-4 py-2.5">{l.from_durban == null ? '—' : l.from_durban ? 'Yes' : 'No'}</td>
                <td className="px-4 py-2.5">{l.attempts}</td>
                <td className="px-4 py-2.5">{l.best_score == null ? '—' : `${l.best_score}/5`}</td>
                <td className="px-4 py-2.5">{l.passed ? '✓' : '—'}</td>
                <td className="px-4 py-2.5 text-gray-500">{fmt(l.created_at)}</td>
              </tr>
            ))}
            {(learners ?? []).length === 0 && (
              <tr><td colSpan={8} className="px-4 py-8 text-center text-gray-400">No learners yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  )
}
