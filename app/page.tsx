import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactDetails from '@/components/ContactDetails'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import Hero from '@/components/Hero'
import SchoolHeader from '@/components/SchoolHeader'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import {
  SCHOOL_BLURB,
  SCHOOL_BOOKING_URL,
  SCHOOL_MAP_URL,
  SCHOOL_MOTTO,
  SCHOOL_NAME,
  SCHOOL_PHONE_DISPLAY,
  SCHOOL_PHONE_TEL,
  SCHOOL_SCHEMA,
  SCHOOL_SERVICES,
  SCHOOL_TAGLINE,
  SITE_URL,
} from '@/lib/school'

export const metadata: Metadata = {
  title: { absolute: 'Sathuthuka Driving School — Code 8, Code 10 & Learner’s Licence in KwaZulu-Natal' },
  description: `${SCHOOL_BLURB} ${SCHOOL_TAGLINE}`,
  keywords: [
    'Sathuthuka Driving School', 'driving school Verulam', 'driving lessons KwaZulu-Natal',
    'Code 8 driving lessons', 'Code 10 truck training', 'Code 14 driving school',
    'motorcycle licence training', 'learners licence KwaZulu-Natal',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Sathuthuka Driving School — Learn to Drive. Learn to Arrive.',
    description: SCHOOL_BLURB,
    url: SITE_URL,
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SCHOOL_NAME,
  url: SITE_URL,
  description: SCHOOL_BLURB,
  inLanguage: 'en-ZA',
}

const ICON = {
  shield: 'M10 1.5l6 2.2v4.6c0 4-2.5 7.2-6 8.7-3.5-1.5-6-4.7-6-8.7V3.7l6-2.2zm-.9 10.3l4-4-1.1-1.1-2.9 2.9-1.2-1.2-1.1 1.1 2.3 2.3z',
  car: 'M4.6 6.5L5.5 4.2C5.8 3.5 6.5 3 7.3 3h5.4c.8 0 1.5.5 1.8 1.2l.9 2.3c.9.2 1.6 1 1.6 2V13a1 1 0 01-1 1h-.5v.5a1 1 0 01-1 1h-.5a1 1 0 01-1-1V14H7.9v.5a1 1 0 01-1 1h-.5a1 1 0 01-1-1V14H4.9a1 1 0 01-1-1V8.5c0-1 .7-1.8 1.6-2zM7.3 4.5l-.6 2h6.6l-.6-2H7.3zM6 10a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z',
  truck: 'M2 5a1 1 0 011-1h8a1 1 0 011 1v1h2.2c.4 0 .8.2 1 .5l1.6 2.1c.1.2.2.4.2.6V13a1 1 0 01-1 1h-.3a2 2 0 01-3.4 0H8.7a2 2 0 01-3.4 0H5a1 1 0 01-1-1V5.5H2V5zm10 2.5V9h3l-1.1-1.5H12zM6.5 14.8a.8.8 0 100-1.6.8.8 0 000 1.6zm7 0a.8.8 0 100-1.6.8.8 0 000 1.6z',
  check: 'M10 2a8 8 0 100 16 8 8 0 000-16zm3.8 6.3l-4.5 4.5a.8.8 0 01-1.1 0L6.2 10.8a.8.8 0 011.1-1.1l1.4 1.4 3.9-3.9a.8.8 0 011.2 1.1z',
  pin: 'M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8.2A2.2 2.2 0 1110 5.8a2.2 2.2 0 010 4.4z',
} as const

const HIGHLIGHTS: { icon: keyof typeof ICON; title: string; text: string }[] = [
  { icon: 'shield', title: '30+ years', text: 'Teaching KZN to drive' },
  { icon: 'car', title: 'Code 8', text: 'Light vehicle lessons' },
  { icon: 'truck', title: 'Code 10 & 14', text: 'Truck training' },
  { icon: 'check', title: 'Learner’s prep', text: 'K53 practice online' },
  { icon: 'pin', title: 'Verulam, KZN', text: 'Ayesha Centre' },
]

const COURSES = ['Code 8 driving lessons', 'Code 10 and Code 14 truck training', 'Motorcycle training', 'Learner’s licence preparation online']

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  )
}

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHOOL_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      {/* ─── Header + hero ─── */}
      <div className="relative">
        <SchoolHeader />
        <Hero />
      </div>

      {/* ─── Highlights ─── */}
      <section className="relative z-10 -mt-24 sm:-mt-28">
        <div className="section-container">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-7 rounded-3xl bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:p-8 lg:grid-cols-5">
            {HIGHLIGHTS.map(h => (
              <li key={h.title} className="flex flex-col items-center text-center last:col-span-2 lg:last:col-span-1">
                <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <svg viewBox="0 0 20 20" className="h-6 w-6 fill-current" aria-hidden="true">
                    <path d={ICON[h.icon]} />
                  </svg>
                </span>
                <p className="text-base font-extrabold text-gray-900">{h.title}</p>
                <p className="mt-0.5 text-sm text-gray-500">{h.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="scroll-mt-6 py-16 sm:py-24">
        <div className="section-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-600">About us</span>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">Over 30 years on KwaZulu-Natal roads</h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">{SCHOOL_BLURB}</p>
            <p className="mt-3 text-base font-semibold text-gray-900 sm:text-lg">{SCHOOL_MOTTO}</p>
            <ul className="mt-6 space-y-3">
              {COURSES.map(c => (
                <li key={c} className="flex items-start gap-3 text-gray-700">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 fill-brand-600" aria-hidden="true">
                    <path d={ICON.check} />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={SCHOOL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-700 active:scale-[0.98]"
              >
                Book a lesson
                <Arrow />
              </a>
              <a
                href={`tel:${SCHOOL_PHONE_TEL}`}
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 px-7 py-3.5 text-sm font-bold text-gray-800 transition-colors hover:border-brand-600 hover:text-brand-700 active:scale-[0.98]"
              >
                Call {SCHOOL_PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-card">
            <Image
              src="/school-hero.jpg"
              alt="Sathuthuka Driving School training car and Code 10 truck"
              width={490}
              height={355}
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section id="services" className="scroll-mt-6 bg-white py-16 sm:py-24">
        <div className="section-container">
          <div className="mb-10 text-center sm:mb-14">
            <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-600">Our services</span>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">From learner’s to licence holder</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">{SCHOOL_MOTTO}</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {SCHOOL_SERVICES.map(service => (
              <div key={service.key} className="card-elevated flex flex-col border-t-4 border-t-brand-600 p-6">
                <span className="self-start rounded-full bg-brand-50 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-brand-700">{service.badge}</span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">{service.desc}</p>
                {service.key === 'learners' ? (
                  <Link href="/practice" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 transition-all hover:gap-2.5 hover:text-brand-600">
                    Start practising
                    <Arrow />
                  </Link>
                ) : (
                  <a
                    href={SCHOOL_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 transition-all hover:gap-2.5 hover:text-brand-600"
                  >
                    Enquire on WhatsApp
                    <Arrow />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Practice platform ─── */}
      <section className="py-14 sm:py-20">
        <div className="section-container">
          <div className="relative overflow-hidden rounded-3xl bg-brand-900 px-6 py-10 text-white sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ backgroundImage: 'radial-gradient(50% 80% at 100% 0%, rgba(224,146,1,0.2), transparent 60%), radial-gradient(45% 70% at 0% 100%, rgba(203,18,13,0.3), transparent 65%)' }}
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-300">Learner’s licence prep</p>
                <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">Practise for your K53 learner’s online</h2>
                <p className="mt-3 text-gray-300">
                  Exam-style practice tests, a free study guide, live notes and videos for Code 8, Code 10 and Code 14.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href="/practice"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-500 active:scale-[0.98]"
                >
                  Open the practice platform
                  <Arrow />
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10 active:scale-[0.98]"
                >
                  Go to the tests
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="scroll-mt-6 bg-brand-900 py-16 text-white sm:py-24">
        <div className="section-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent-300">Find us</span>
            <h2 className="mb-8 text-3xl font-extrabold sm:text-4xl">Visit us, call us or message us</h2>
            <ContactDetails tone="dark" />
            <a
              href={SCHOOL_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-accent-300 hover:text-accent-200"
            >
              Open in Google Maps
              <Arrow />
            </a>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 p-7 text-center shadow-hero sm:p-10 lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-300">{SCHOOL_TAGLINE}</p>
            <h3 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">Book your first lesson today</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
              {SCHOOL_MOTTO} Message us on WhatsApp or call {SCHOOL_PHONE_DISPLAY} and we’ll take it from there.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href={SCHOOL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-green-600 active:scale-[0.98]"
              >
                <WhatsAppIcon />
                Book on WhatsApp
              </a>
              <a
                href={`tel:${SCHOOL_PHONE_TEL}`}
                className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10 active:scale-[0.98]"
              >
                Call {SCHOOL_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  )
}
