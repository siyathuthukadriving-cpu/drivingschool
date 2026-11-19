/**
 * Layout for the school's lesson pages and learner's-licence guides: hero, content sections,
 * optional sources, visible FAQs (mirrored into FAQPage schema) and the "find us" band.
 */
import FloatingWhatsApp from './FloatingWhatsApp'
import JsonLd from './JsonLd'
import { FaqList, FindUs, PageHero } from './SchoolPageParts'
import { breadcrumbSchema, canonical, faqSchema, type Faq } from '@/lib/seo'
import { SCHOOL_REF, SCHOOL_SCHEMA } from '@/lib/school'

export type InfoSection = {
  heading: string
  paragraphs?: React.ReactNode[]
  bullets?: React.ReactNode[]
  table?: { caption: string; head: string[]; rows: React.ReactNode[][] }
  after?: React.ReactNode[]
}

export default function InfoPage({
  path,
  crumb,
  h1,
  lead,
  cta = 'book',
  sections,
  faqs,
  faqHeading = 'Questions',
  links,
  linksHeading,
  sources,
  reviewed,
  service,
}: {
  path: string
  crumb: string
  h1: string
  lead: React.ReactNode
  cta?: 'book' | 'practice'
  sections: InfoSection[]
  faqs: Faq[]
  faqHeading?: string
  links: { href: string; label: string; blurb?: string }[]
  linksHeading?: string
  sources?: { href: string; label: string }[]
  /** Date the official facts on the page were last checked, e.g. "19 November 2026". */
  reviewed?: string
  /** Adds Service structured data for lesson pages. */
  service?: { name: string; description: string }
}) {
  const jsonLd: object[] = [SCHOOL_SCHEMA, breadcrumbSchema([{ name: crumb, path }])]
  if (faqs.length) jsonLd.push(faqSchema(faqs))
  if (service) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      url: canonical(path),
      provider: SCHOOL_REF,
      areaServed: [
        { '@type': 'City', name: 'Durban' },
        { '@type': 'AdministrativeArea', name: 'eThekwini Metropolitan Municipality' },
      ],
    })
  }

  return (
    <main>
      <JsonLd data={jsonLd} />
      <PageHero crumb={crumb} h1={h1} lead={lead} cta={cta} />

      <article className="section-container max-w-3xl space-y-12 py-14 sm:py-20">
        {sections.map(s => (
          <section key={s.heading} className="space-y-4">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{s.heading}</h2>
            {s.paragraphs?.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-gray-600 sm:text-lg">{p}</p>
            ))}
            {s.bullets && (
              <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            )}
            {s.table && (
              <div className="overflow-x-auto rounded-2xl border border-gray-200">
                <table className="w-full border-collapse text-left text-sm">
                  <caption className="sr-only">{s.table.caption}</caption>
                  <thead className="bg-brand-50 text-brand-950">
                    <tr>
                      {s.table.head.map(h => <th key={h} scope="col" className="px-4 py-3 font-bold">{h}</th>)}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {s.table.rows.map((r, i) => (
                      <tr key={i}>
                        {r.map((c, j) =>
                          j === 0
                            ? <th key={j} scope="row" className="px-4 py-3 font-semibold text-gray-900">{c}</th>
                            : <td key={j} className="px-4 py-3 text-gray-600">{c}</td>,
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {s.after?.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-gray-600 sm:text-lg">{p}</p>
            ))}
          </section>
        ))}

        {sources && (
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-lg font-bold text-gray-900">Official sources</h2>
            {reviewed && (
              <p className="mt-2 text-sm text-gray-600">
                Checked on {reviewed}. Rules and fees can change, so confirm with your testing centre before you go.
              </p>
            )}
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
              {sources.map(s => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">{s.label}</a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      {faqs.length > 0 && <FaqList faqs={faqs} heading={faqHeading} />}

      <FindUs links={links} linksHeading={linksHeading} />
      <FloatingWhatsApp />
    </main>
  )
}
