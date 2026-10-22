import type { Metadata } from 'next'
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
  SCHOOL_TESTIMONIALS,
  SITE_URL,
} from '@/lib/school'

export const metadata: Metadata = {
  title: { absolute: 'Thompho’s Driving Academy — Driving Made Easy' },
  description:
    'Thompho’s Driving Academy in Sunnyside, Pretoria. Patient instructors, K53 test preparation, and friendly driving lessons. Book on WhatsApp or call today.',
  keywords: [
    'Thompho’s Driving Academy', 'driving school Sunnyside', 'driving lessons Pretoria',
    'K53 test preparation Pretoria', 'beginner driving lessons Pretoria', 'driving school Pretoria',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Thompho’s Driving Academy — Driving Made Easy',
    description: 'Patient, professional driving lessons in Sunnyside, Pretoria. Book your lesson on WhatsApp or call us today.',
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
  star: 'M10 1.5l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.88l5.34-.78z',
  clock: 'M10 2a8 8 0 100 16 8 8 0 000-16zm.8 4.2v3.9l2.9 1.7-.8 1.3-3.5-2.1V6.2h1.4z',
  check: 'M10 2a8 8 0 100 16 8 8 0 000-16zm3.8 6.3l-4.5 4.5a.8.8 0 01-1.1 0L6.2 10.8a.8.8 0 011.1-1.1l1.4 1.4 3.9-3.9a.8.8 0 011.2 1.1z',
  pin: 'M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8.2A2.2 2.2 0 1110 5.8a2.2 2.2 0 010 4.4z',
} as const

const HIGHLIGHTS: { icon: keyof typeof ICON; title: string }[] = [
  { icon: 'shield', title: 'Patient instructors' },
  { icon: 'star', title: 'First-time pass support' },
  { icon: 'clock', title: 'Flexible lesson booking' },
  { icon: 'check', title: 'Test preparation' },
  { icon: 'pin', title: 'Local Pretoria experience' },
]

const ABOUT_POINTS = [
  'Patient, supportive instructors',
  'K53 test preparation that works',
  'Flexible lesson booking to suit you',
]

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
                <p className="text-sm font-bold text-gray-900 sm:text-base">{h.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="scroll-mt-6 py-16 sm:py-24">
        <div className="section-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-600">About Us</span>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">Confidence behind the wheel</h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              Thompho’s Driving Academy helps learners gain confidence behind the wheel through structured lessons, patient instructors, and smooth support from booking through to test preparation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              From your very first lesson to the day you pass your test, our friendly instructors are with you every step of the way — turning nervous beginners into safe, licensed drivers.
            </p>
            <ul className="mt-6 space-y-3">
              {ABOUT_POINTS.map(c => (
                <li key={c} className="flex items-start gap-3 text-gray-700">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 fill-brand-600" aria-hidden="true">
                    <path d={ICON.check} />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 p-10 text-center text-white shadow-card sm:p-14">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ backgroundImage: 'radial-gradient(60% 60% at 90% 10%, rgba(249,115,22,0.35), transparent 65%)' }}
              aria-hidden="true"
            />
            <div className="relative">
              <p className="text-6xl font-extrabold text-accent-400 sm:text-7xl">116+</p>
              <p className="mt-2 text-lg font-bold">Licensed drivers</p>
              <p className="mx-auto mt-4 max-w-xs text-sm text-white/80">{SCHOOL_MOTTO}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section id="services" className="scroll-mt-6 bg-white py-16 sm:py-24">
        <div className="section-container">
          <div className="mb-10 text-center sm:mb-14">
            <span className="mb-3 inline-block rounded-full bg-accent-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-600">What We Offer</span>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">Everything you need to get your license and feel safe on the road.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {SCHOOL_SERVICES.map(service => (
              <div key={service.key} className="card-elevated flex flex-col border-t-4 border-t-accent-500 p-6">
                <span className="self-start rounded-full bg-brand-50 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-brand-700">{service.badge}</span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">{service.desc}</p>
                {service.key === 'practice' ? (
                  <Link href="/practice" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 transition-all hover:gap-2.5 hover:text-brand-600">
                    Learn more
                    <Arrow />
                  </Link>
                ) : (
                  <a
                    href={SCHOOL_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 transition-all hover:gap-2.5 hover:text-brand-600"
                  >
                    Learn more
                    <Arrow />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Online practice ─── */}
      <section className="py-14 sm:py-20">
        <div className="section-container">
          <div className="relative overflow-hidden rounded-3xl bg-brand-900 px-6 py-10 text-white sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ backgroundImage: 'radial-gradient(50% 80% at 100% 0%, rgba(249,115,22,0.25), transparent 60%), radial-gradient(45% 70% at 0% 100%, rgba(47,79,208,0.45), transparent 65%)' }}
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-300">K53 test preparation</p>
                <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">Practise for your K53 learner’s online</h2>
                <p className="mt-3 text-gray-300">
                  Exam-style practice tests, a free study guide, live notes and videos for Code 8, Code 10 and Code 14.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href="/practice"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-accent-600 active:scale-[0.98]"
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

      {/* ─── Testimonials ─── */}
      <section id="reviews" className="scroll-mt-6 bg-white py-16 sm:py-24">
        <div className="section-container">
          <div className="mb-10 text-center sm:mb-14">
            <span className="mb-3 inline-block rounded-full bg-accent-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-600">Testimonials</span>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Student Success Stories</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">Don’t just take our word for it — hear from our happy licensed drivers.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
            {SCHOOL_TESTIMONIALS.map(t => (
              <figure key={t.name} className="card-elevated flex flex-col p-6 sm:p-7">
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map(i => (
                    <svg key={i} viewBox="0 0 20 20" className="h-5 w-5 fill-accent-500" aria-hidden="true">
                      <path d={ICON.star} />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white" aria-hidden="true">
                    {t.name.charAt(0)}
                  </span>
                  <span className="text-sm font-bold text-gray-900">{t.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Get started ─── */}
      <section className="py-14 sm:py-20">
        <div className="section-container">
          <div className="rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 px-6 py-12 text-center text-white shadow-hero sm:px-12 sm:py-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-300">Get Started</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Ready to Start Driving?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Booking is quick and easy — send us a WhatsApp message or give us a call and we’ll confirm your first lesson.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={SCHOOL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-green-600 active:scale-[0.98]"
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
              <a
                href={`tel:${SCHOOL_PHONE_TEL}`}
                className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10 active:scale-[0.98]"
              >
                Call {SCHOOL_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="scroll-mt-6 bg-brand-900 py-16 text-white sm:py-24">
        <div className="section-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent-300">Contact</span>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Get in Touch</h2>
            <p className="mb-8 mt-3 text-white/80">Choose whatever’s easiest for you. We’re happy to answer any questions.</p>
            <ContactDetails tone="dark" />
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-hero sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-300">Visit Our Office</p>
            <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">{SCHOOL_NAME}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
              Conveniently located in Sunnyside, Pretoria. Drop by or get directions below.
            </p>
            <a
              href={SCHOOL_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-accent-600 active:scale-[0.98]"
            >
              Get Directions
              <Arrow />
            </a>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  )
}
