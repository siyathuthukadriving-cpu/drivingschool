import Link from 'next/link'
import FloatingWhatsApp from './FloatingWhatsApp'
import JsonLd from './JsonLd'
import { FaqList, FindUs, PageHero } from './SchoolPageParts'
import { LOCATIONS, getLocation } from '@/lib/locations'
import { breadcrumbSchema, faqSchema } from '@/lib/seo'
import { SCHOOL_MOTTO, SCHOOL_PHONE_DISPLAY, SCHOOL_SCHEMA, SCHOOL_SERVICES } from '@/lib/school'

const STEPS = [
  { n: '1', title: 'Message or call us', text: `WhatsApp or call ${SCHOOL_PHONE_DISPLAY} and tell us which licence you want.` },
  { n: '2', title: 'Tell us where you are', text: 'Share your pick-up address and your experience so we can recommend where to start.' },
  { n: '3', title: 'Start learning', text: 'Confirm your lesson times with us and begin your journey to a licence.' },
]

/** One landing page for a confirmed area, e.g. "driving school in Durban North". */
export default function LocationPage({ slug }: { slug: string }) {
  const loc = getLocation(slug)
  const others = LOCATIONS.filter(l => l.slug !== slug)

  return (
    <main>
      <JsonLd
        data={[
          SCHOOL_SCHEMA,
          breadcrumbSchema([{ name: loc.h1, path: loc.path }]),
          faqSchema(loc.faqs),
        ]}
      />

      <PageHero crumb={loc.area} h1={loc.h1} lead={<p>{loc.lead}</p>} />

      {/* ─── Area copy ─── */}
      <section className="py-14 sm:py-20">
        <div className="section-container grid gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="space-y-5 lg:col-span-3">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{loc.introHeading}</h2>
            {loc.body.map(p => (
              <p key={p} className="text-base leading-relaxed text-gray-600 sm:text-lg">{p}</p>
            ))}
            <p className="text-base font-semibold text-gray-900 sm:text-lg">{SCHOOL_MOTTO}</p>
            {loc.sections.map(s => (
              <div key={s.heading} className="space-y-4 pt-4">
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{s.heading}</h2>
                {s.paragraphs.map(p => (
                  <p key={p} className="text-base leading-relaxed text-gray-600 sm:text-lg">{p}</p>
                ))}
              </div>
            ))}
          </div>
          <aside className="lg:col-span-2">
            <div className="card-elevated border-t-4 border-t-brand-600 p-6 sm:p-7">
              <h2 className="text-lg font-extrabold text-gray-900">{loc.servicesHeading}</h2>
              <ul className="mt-4 space-y-3">
                {SCHOOL_SERVICES.map(s => (
                  <li key={s.key} className="flex items-start gap-3 text-gray-700">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 fill-brand-600" aria-hidden="true">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.8 6.3l-4.5 4.5a.8.8 0 01-1.1 0L6.2 10.8a.8.8 0 011.1-1.1l1.4 1.4 3.9-3.9a.8.8 0 011.2 1.1z" />
                    </svg>
                    <Link href={s.href} className="font-semibold hover:text-brand-700 hover:underline">{s.linkText}</Link>
                  </li>
                ))}
                <li className="flex items-start gap-3 text-gray-700">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 fill-brand-600" aria-hidden="true">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.8 6.3l-4.5 4.5a.8.8 0 01-1.1 0L6.2 10.8a.8.8 0 011.1-1.1l1.4 1.4 3.9-3.9a.8.8 0 011.2 1.1z" />
                  </svg>
                  <Link href="/code-14-lessons" className="font-semibold hover:text-brand-700 hover:underline">Code 14 heavy-vehicle lessons</Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ─── How booking works ─── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="section-container">
          <h2 className="mb-10 text-center text-2xl font-extrabold text-gray-900 sm:text-3xl">{loc.bookHeading}</h2>
          <ol className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
            {STEPS.map(s => (
              <li key={s.n} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
                <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-xl font-extrabold text-brand-600">{s.n}</span>
                <h3 className="font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray-500">
            Still need your learner’s? Read{' '}
            <Link href="/how-to-book-learners-licence-durban" className="font-semibold text-brand-700 hover:underline">how to book a learner’s test in Durban</Link>{' '}
            and practise with our{' '}
            <Link href="/learners-licence-durban" className="font-semibold text-brand-700 hover:underline">K53 learner’s preparation</Link>.
          </p>
        </div>
      </section>

      <FaqList faqs={loc.faqs} heading={loc.faqHeading} />

      <FindUs
        showMap={slug === 'verulam'}
        linksHeading="Other pages for Durban learners"
        links={[
          ...others.map(o => ({ href: o.path, label: o.linkText, blurb: o.linkBlurb })),
          { href: '/practice', label: 'K53 learner’s practice tests online', blurb: 'Free study guide and exam-style practice.' },
          ...(slug === 'verulam' ? [{ href: '/centers', label: 'Learner’s licence testing centres in KZN', blurb: 'Find an official DLTC near you.' }] : []),
          { href: '/contact', label: 'Contact the school' },
        ]}
      />

      <FloatingWhatsApp />
    </main>
  )
}
