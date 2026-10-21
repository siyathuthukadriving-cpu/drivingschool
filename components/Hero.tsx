import Link from 'next/link'
import Image from 'next/image'
import {
  SCHOOL_BLURB,
  SCHOOL_BOOKING_URL,
  SCHOOL_MOTTO,
  SCHOOL_PHONE_DISPLAY,
  SCHOOL_PHONE_TEL,
} from '@/lib/school'

const LICENCE_CHIPS = ['Learner’s', 'Code 8', 'Code 10 / 14', 'Motorcycle']

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current" aria-hidden="true">
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative bg-brand-900 text-white overflow-hidden">
      {/* Sunset glow and road line, echoing the banner */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(60% 80% at 85% 20%, rgba(224,146,1,0.22), transparent 60%), radial-gradient(50% 60% at 0% 100%, rgba(203,18,13,0.28), transparent 65%)',
        }}
        aria-hidden="true"
      />
      <div className="relative section-container py-12 sm:py-16 lg:py-20 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-accent-500/15 border border-accent-500/40 text-accent-300 text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-400" aria-hidden="true" />
            Teaching KZN to drive for over 30 years
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-balance">
            Learn to Drive.
            <span className="block text-brand-500">Learn to Arrive.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {SCHOOL_BLURB}
          </p>
          <p className="mt-3 text-sm sm:text-base font-semibold text-white/90 italic">
            {SCHOOL_MOTTO}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center">
            <a
              href={SCHOOL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-600 text-white font-bold px-8 py-4 rounded-full text-base hover:bg-brand-500 transition-all duration-200 shadow-hero inline-flex items-center gap-2 hover:gap-3 active:scale-[0.97] w-full sm:w-auto justify-center"
            >
              Book a lesson
              <ArrowIcon />
            </a>
            <Link
              href="/courses"
              className="bg-white/5 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full text-base hover:bg-white/15 hover:border-white/60 transition-all duration-200 inline-flex items-center justify-center active:scale-[0.97] w-full sm:w-auto"
            >
              Practise for your learner’s
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-2" aria-label="Licences we teach">
            {LICENCE_CHIPS.map(chip => (
              <li
                key={chip}
                className="text-xs sm:text-sm font-semibold text-white/90 border border-white/20 bg-white/5 rounded-full px-3.5 py-1.5"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
            <Image
              src="/school-hero.jpg"
              alt="A Sathuthuka Driving School training car and Code 10 truck on a hill road overlooking Durban at sunset"
              width={490}
              height={355}
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="w-full h-auto"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 bg-black px-4 py-3">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-accent-300 font-bold">Verulam, KwaZulu-Natal</p>
                <p className="text-sm font-semibold">Code 8 · Code 10 · Code 14</p>
              </div>
              <a
                href={`tel:${SCHOOL_PHONE_TEL}`}
                className="shrink-0 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 transition-colors rounded-full px-4 py-2 text-xs sm:text-sm font-bold"
              >
                <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white" aria-hidden="true"><path d="M2 3a1 1 0 011-1h2.15a1 1 0 01.99.84l.5 3a1 1 0 01-.55 1.05l-1.3.65a11.04 11.04 0 005.02 5.02l.65-1.3a1 1 0 011.05-.55l3 .5a1 1 0 01.84.99V17a1 1 0 01-1 1h-1C7.82 18 2 12.18 2 5V3z" /></svg>
                {SCHOOL_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 48" fill="none" className="w-full h-8 sm:h-12" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 48h1440V24C1200 0 960 48 720 48S240 0 0 24v24z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  )
}
