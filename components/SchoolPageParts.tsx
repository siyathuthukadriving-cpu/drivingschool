/**
 * Building blocks shared by the school's location, lesson and learner's-licence guide pages:
 * the dark hero under the school header, the FAQ accordion and the "find us" band.
 */
import Link from 'next/link'
import ContactDetails from './ContactDetails'
import SchoolHeader from './SchoolHeader'
import WhatsAppIcon from './WhatsAppIcon'
import type { Faq } from '@/lib/seo'
import {
  SCHOOL_BOOKING_URL,
  SCHOOL_GOOGLE_PROFILE_URL,
  SCHOOL_HOURS,
  SCHOOL_MAP_EMBED_URL,
  SCHOOL_MAP_URL,
  SCHOOL_NAME,
  SCHOOL_PHONE_DISPLAY,
  SCHOOL_PHONE_TEL,
  SCHOOL_PICKUP_LINE,
} from '@/lib/school'

const BTN = 'inline-flex items-center justify-center gap-2.5 rounded-2xl px-8 py-4 text-lg font-bold transition-colors active:scale-[0.98]'
const BTN_GHOST = 'border-2 border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20'

export function PageHero({
  crumb,
  h1,
  lead,
  cta = 'book',
}: {
  crumb: string
  h1: string
  lead: React.ReactNode
  cta?: 'book' | 'practice'
}) {
  return (
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
            <span className="text-white" aria-current="page">{crumb}</span>
          </nav>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">{h1}</h1>
          <div className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">{lead}</div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            {cta === 'practice' ? (
              <>
                <Link href="/practice" className={`${BTN} bg-brand-600 text-white shadow-xl hover:bg-brand-500`}>
                  Start practising for the K53
                </Link>
                <a href={SCHOOL_BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`${BTN} ${BTN_GHOST}`}>
                  <WhatsAppIcon className="h-6 w-6" />
                  Ask us on WhatsApp
                </a>
              </>
            ) : (
              <>
                <a href={SCHOOL_BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`${BTN} bg-green-500 text-white shadow-xl shadow-green-900/30 hover:bg-green-600`}>
                  <WhatsAppIcon className="h-6 w-6" />
                  Book on WhatsApp
                </a>
                <a href={`tel:${SCHOOL_PHONE_TEL}`} className={`${BTN} ${BTN_GHOST}`}>
                  Call {SCHOOL_PHONE_DISPLAY}
                </a>
              </>
            )}
          </div>
          <p className="mt-6 text-sm text-white/70">
            {SCHOOL_HOURS.display} · {SCHOOL_PICKUP_LINE}
          </p>
        </div>
      </section>
    </div>
  )
}

export function FaqList({ faqs, heading }: { faqs: readonly Faq[]; heading: string }) {
  return (
    <section className="section-container max-w-3xl py-14 sm:py-20">
      <h2 className="mb-8 text-center text-2xl font-extrabold text-gray-900 sm:text-3xl">{heading}</h2>
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
  )
}

/** Contact details, hours, map links and a list of related pages on a dark band. */
export function FindUs({
  links,
  linksHeading = 'Also useful',
  showMap = false,
}: {
  links: readonly { href: string; label: string; blurb?: string }[]
  linksHeading?: string
  showMap?: boolean
}) {
  return (
    <section className="bg-brand-900 py-14 text-white sm:py-20">
      <div className="section-container grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="mb-8 text-2xl font-extrabold sm:text-3xl">Find {SCHOOL_NAME}</h2>
          <ContactDetails tone="dark" />
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold">
            <a href={SCHOOL_MAP_URL} target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-200">
              Open in Google Maps →
            </a>
            <a href={SCHOOL_GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-200">
              See us on Google →
            </a>
          </div>
          {showMap && (
            <iframe
              title={`Map showing ${SCHOOL_NAME} at the Ayesha Centre, Verulam`}
              src={SCHOOL_MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-8 h-72 w-full rounded-2xl border-0"
            />
          )}
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-9">
          <h2 className="text-xl font-extrabold">{linksHeading}</h2>
          <ul className="mt-5 space-y-3">
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="font-semibold text-accent-300 hover:text-accent-200 hover:underline">{l.label}</Link>
                {l.blurb && <p className="text-sm text-white/70">{l.blurb}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
