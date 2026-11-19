import type { Metadata } from 'next'
import CenterFinder from '@/components/CenterFinder'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { OFFICIAL } from '@/lib/official'
import { breadcrumbSchema, pageMetadata } from '@/lib/seo'

const DEFAULT_META = {
  title: 'Durban & KZN Learner’s Test Centres',
  description: 'Find official DLTCs in Durban, eThekwini and KwaZulu-Natal, and see what to take when you book your learner’s licence test.',
}

export async function generateMetadata(
  { searchParams }: { searchParams: { province?: string } }
): Promise<Metadata> {
  const province = PROVINCES.find(p => p.name === searchParams.province)
  if (!province) return pageMetadata({ path: '/centers', ...DEFAULT_META })
  return pageMetadata({
    path: `/centers?province=${encodeURIComponent(province.name)}`,
    title: `Learner’s Licence Centres in ${province.name} | Sathuthuka`,
    description: `Find learner’s licence testing centres (DLTCs) in ${province.name}, including ${province.eg}. Confirm hours and requirements with the centre.`,
  })
}

const PROVINCES = [
  { name: 'Gauteng',       eg: 'Joburg, Pretoria, Ekurhuleni' },
  { name: 'Western Cape',  eg: 'Cape Town, Paarl, George' },
  { name: 'KwaZulu-Natal', eg: 'Durban, PMB, Richards Bay' },
  { name: 'Eastern Cape',  eg: 'Gqeberha, East London, Mthatha' },
  { name: 'Mpumalanga',    eg: 'Nelspruit, Secunda, Witbank' },
  { name: 'Limpopo',       eg: 'Polokwane, Thohoyandou, Mokopane' },
  { name: 'Free State',    eg: 'Bloemfontein, Kroonstad, Harrismith' },
  { name: 'North West',    eg: 'Mahikeng, Rustenburg, Zeerust' },
  { name: 'Northern Cape', eg: 'Kimberley, Upington, De Aar' },
]

export default function CentersPage({
  searchParams,
}: {
  searchParams: { province?: string }
}) {
  const initialProvince = searchParams.province ?? ''
  const validProvince = PROVINCES.find(p => p.name === initialProvince)?.name ?? ''

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Test centres', path: '/centers' }])} />

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Hero */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">
            {validProvince || 'Durban, eThekwini and KwaZulu-Natal'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3 leading-tight">
            {validProvince
              ? `Learner's Licence Centres in ${validProvince}`
              : 'Learner’s Licence Test Centres in Durban and KZN'}
          </h1>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            {validProvince
              ? `Showing DLTCs in ${validProvince}, sorted by distance from the province centre. Enter your suburb to sort by your exact location.`
              : <>Showing driving licence testing centres (DLTCs) in KwaZulu-Natal. Enter your suburb — or tap <strong>Use my location</strong> — to sort them by distance. Always confirm hours and booking times with the centre before you go.</>}
          </p>
        </div>

        {/* Search widget — receives initialProvince from URL */}
        <CenterFinder initialProvince={validProvince || 'KwaZulu-Natal'} />

        {/* Province quick-links */}
        <section className="mt-16 border-t border-gray-100 pt-10">
          <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">
            Outside KwaZulu-Natal? Browse centres by province
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {PROVINCES.map(p => (
              <Link
                key={p.name}
                href={`/centers?province=${encodeURIComponent(p.name)}`}
                className={`border rounded-xl p-4 transition-all ${
                  validProvince === p.name
                    ? 'bg-brand-700 border-brand-700 text-white shadow'
                    : 'bg-white border-gray-200 hover:border-brand-400 hover:shadow-sm'
                }`}
              >
                <p className={`font-semibold text-sm ${validProvince === p.name ? 'text-white' : 'text-gray-900'}`}>{p.name}</p>
                <p className={`text-xs mt-0.5 truncate ${validProvince === p.name ? 'text-brand-100' : 'text-gray-400'}`}>{p.eg}</p>
              </Link>
            ))}
          </div>
          {validProvince && (
            <div className="text-center mt-4">
              <Link href="/centers" className="text-sm text-brand-600 hover:underline">
                ← Back to Durban and KZN centres
              </Link>
            </div>
          )}
        </section>

        <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 font-bold text-gray-900">Booking your learner’s test in KwaZulu-Natal</h2>
          <ol className="space-y-3">
            {[
              { n: '1', title: 'Apply in person', body: 'In KwaZulu-Natal you apply at a driving licence testing centre. You can apply at any DLTC in the province.' },
              { n: '2', title: 'Take the right documents', body: 'Your ID and a certified copy, identical black-and-white ID photos (ask the centre how many), proof of address not older than three months, form LL1 and the booking fee.' },
              { n: '3', title: 'Do the eye test', body: 'Your eyes are tested at the centre, or you can bring a test done by an optometrist.' },
              { n: '4', title: 'Write the K53 test', body: 'The test has 64 questions on road traffic signs (28), rules of the road (28) and vehicle controls (8). You must pass all three sections.' },
            ].map(({ n, title, body }) => (
              <li key={n} className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-700 text-xs font-bold text-white">{n}</span>
                <div>
                  <p className="text-sm font-bold text-gray-900">{title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-gray-500">{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm text-gray-600">
            Read the full <Link href="/how-to-book-learners-licence-durban" className="font-semibold text-brand-700 hover:underline">guide to booking a learner’s licence in Durban</Link>,
            check the <Link href="/learners-licence-cost" className="font-semibold text-brand-700 hover:underline">learner’s licence cost</Link>, or see the official{' '}
            <a href={OFFICIAL.learners.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 hover:underline">gov.za</a> and{' '}
            <a href={OFFICIAL.kzn.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 hover:underline">KZN Department of Transport</a> pages.
          </p>
        </section>

        <section className="mt-6 flex flex-col items-center gap-4 rounded-2xl border border-green-200 bg-green-50 p-5 sm:flex-row">
          <div className="flex-1">
            <p className="text-sm font-bold text-green-900">Preparing for your learner’s test?</p>
            <p className="mt-0.5 text-xs text-green-700">
              Practise road signs, rules of the road and vehicle controls with Sathuthuka’s K53 practice tests, or read our{' '}
              <Link href="/learners-licence-durban" className="font-semibold underline">learner’s licence guide for Durban</Link>.
            </p>
          </div>
          <Link href="/practice" className="shrink-0 whitespace-nowrap rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-700">
            Start practising →
          </Link>
        </section>

      </main>
    </>
  )
}
