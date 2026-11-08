import Link from 'next/link'
import ContactDetails from './ContactDetails'
import FloatingWhatsApp from './FloatingWhatsApp'
import SchoolHeader from './SchoolHeader'
import WhatsAppIcon from './WhatsAppIcon'
import { ACCESS_DURATION_DAYS, ACCESS_PRICE } from '@/lib/contact'
import { LOCATIONS, getLocation } from '@/lib/locations'
import {
  SCHOOL_ADDRESS,
  SCHOOL_BOOKING_URL,
  SCHOOL_MAP_URL,
  SCHOOL_MOTTO,
  SCHOOL_NAME,
  SCHOOL_PHONE_DISPLAY,
  SCHOOL_PHONE_TEL,
  SCHOOL_SCHEMA,
  SITE_URL,
} from '@/lib/school'

const STEPS = [
  { n: '1', title: 'Message or call us', text: `WhatsApp or call ${SCHOOL_PHONE_DISPLAY} and tell us which licence you want.` },
  { n: '2', title: 'Tell us where you are', text: 'Share your area and your experience so we can recommend where to start.' },
  { n: '3', title: 'Start learning', text: 'Confirm your lessons with us and begin your journey to a licence.' },
]

/** One SEO landing page for a search area, e.g. "driving school in Durban North". */
export default function LocationPage({ slug }: { slug: string }) {
  const loc = getLocation(slug)
  const others = LOCATIONS.filter(l => l.slug !== slug)

  const faqs = [
    {
      q: `Where is ${SCHOOL_NAME} based?`,
      a: `We are at ${SCHOOL_ADDRESS}, on the northern side of Durban.`,
    },
    {
      q: `Do you teach learners from ${loc.area}?`,
      a: `Yes. Learners from ${loc.area} are welcome. Message us on WhatsApp or call ${SCHOOL_PHONE_DISPLAY} with your area and the licence you want, and we will explain the options.`,
    },
    {
      q: 'Which licences can I train for?',
      a: 'We teach Code 8 (light vehicles), Code 10 and Code 14 (trucks and heavy vehicles) and motorcycle, and we help you prepare for your learner’s licence.',
    },
    {
      q: 'How do I book a driving lesson?',
      a: `The quickest way is WhatsApp or a phone call to ${SCHOOL_PHONE_DISPLAY}. We will discuss your licence code, your experience and your availability.`,
    },
    {
      q: 'Can I prepare for my learner’s licence online?',
      a: `Yes. Our online practice platform has a free K53 study guide and exam-style practice tests. Full access to every test is ${ACCESS_PRICE} for ${ACCESS_DURATION_DAYS} days.`,
    },
  ]

  const jsonLd = [
    {
      ...SCHOOL_SCHEMA,
      '@id': `${SITE_URL}/#school`,
      url: SITE_URL,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: SCHOOL_NAME, item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: loc.h1, item: `${SITE_URL}${loc.path}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  return (
    <main>
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}

      {/* ─── Hero ─── */}
      <div className="relative">
        <SchoolHeader />
        <section className="relative isolate overflow-hidden bg-brand-900 text-white">
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                'radial-gradient(60% 70% at 90% 10%, rgba(224,146,1,0.22), transparent 65%), radial-gradient(55% 70% at 0% 100%, rgba(203,18,13,0.32), transparent 65%)',
            }}
            aria-hidden="true"
          />
          <div className="section-container pb-16 pt-32 sm:pb-24 sm:pt-40">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/70">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-white">{loc.area}</span>
            </nav>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">{loc.h1}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">{loc.lead}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={SCHOOL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-green-900/30 transition-colors hover:bg-green-600 active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-6 w-6" />
                Book on WhatsApp
              </a>
              <a
                href={`tel:${SCHOOL_PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur transition-colors hover:bg-white/20 active:scale-[0.98]"
              >
                Call {SCHOOL_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ─── Area copy ─── */}
      <section className="py-14 sm:py-20">
        <div className="section-container grid gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="space-y-5 lg:col-span-3">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Learn to drive near {loc.area}</h2>
            {loc.body.map(p => (
              <p key={p} className="text-base leading-relaxed text-gray-600 sm:text-lg">{p}</p>
            ))}
            <p className="text-base font-semibold text-gray-900 sm:text-lg">{SCHOOL_MOTTO}</p>
          </div>
          <aside className="lg:col-span-2">
            <div className="card-elevated border-t-4 border-t-brand-600 p-6 sm:p-7">
              <h3 className="text-lg font-extrabold text-gray-900">What we teach</h3>
              <ul className="mt-4 space-y-3">
                {loc.points.map(p => (
                  <li key={p} className="flex items-start gap-3 text-gray-700">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 fill-brand-600" aria-hidden="true">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.8 6.3l-4.5 4.5a.8.8 0 01-1.1 0L6.2 10.8a.8.8 0 011.1-1.1l1.4 1.4 3.9-3.9a.8.8 0 011.2 1.1z" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ─── How booking works ─── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="section-container">
          <h2 className="mb-10 text-center text-2xl font-extrabold text-gray-900 sm:text-3xl">How to book</h2>
          <ol className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
            {STEPS.map(s => (
              <li key={s.n} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
                <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-xl font-extrabold text-brand-600">{s.n}</span>
                <h3 className="font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-container max-w-3xl py-14 sm:py-20">
        <h2 className="mb-8 text-center text-2xl font-extrabold text-gray-900 sm:text-3xl">Driving school questions</h2>
        <div className="space-y-3">
          {faqs.map(f => (
            <details key={f.q} className="card-elevated group cursor-pointer px-6 py-5">
              <summary className="flex list-none items-center justify-between gap-3 text-sm font-semibold text-gray-900 sm:text-base">
                {f.q}
                <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0 fill-current text-gray-400 transition-transform duration-200 group-open:rotate-180" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ─── Where we are ─── */}
      <section className="bg-brand-900 py-14 text-white sm:py-20">
        <div className="section-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-8 text-2xl font-extrabold sm:text-3xl">Find {SCHOOL_NAME}</h2>
            <ContactDetails tone="dark" />
            <a
              href={SCHOOL_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-accent-300 hover:text-accent-200"
            >
              Open in Google Maps →
            </a>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-9">
            <h3 className="text-xl font-extrabold">Also serving</h3>
            <ul className="mt-5 space-y-3">
              {others.map(o => (
                <li key={o.slug}>
                  <Link href={o.path} className="font-semibold text-accent-300 hover:text-accent-200 hover:underline">{o.linkText}</Link>
                  <p className="text-sm text-white/70">{o.linkBlurb}</p>
                </li>
              ))}
              <li>
                <Link href="/practice" className="font-semibold text-accent-300 hover:text-accent-200 hover:underline">Learner’s licence practice tests online</Link>
                <p className="text-sm text-white/70">Free K53 study guide and exam-style practice.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  )
}
