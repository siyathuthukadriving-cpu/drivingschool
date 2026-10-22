import Image from 'next/image'
import WhatsAppIcon from './WhatsAppIcon'
import {
  SCHOOL_BLURB,
  SCHOOL_BOOKING_URL,
  SCHOOL_MOTTO,
  SCHOOL_PHONE_DISPLAY,
  SCHOOL_PHONE_TEL,
} from '@/lib/school'

/** Full-width hero of the school landing page: photo behind a brand-colour overlay. */
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900 text-white">
      <Image
        src="/school-hero.jpg"
        alt="A Sathuthuka Driving School training car and Code 10 truck on a hill road overlooking Durban at sunset"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_40%]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/80 to-brand-700/45" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: 'radial-gradient(60% 70% at 90% 15%, rgba(224,146,1,0.22), transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="section-container pb-44 pt-32 sm:pb-52 sm:pt-44 lg:pb-60 lg:pt-52">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
            <svg viewBox="0 0 20 20" className="h-4 w-4 fill-accent-400" aria-hidden="true">
              <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.68l5.34-.78z" />
            </svg>
            Teaching KZN to drive for over 30 years
          </div>

          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Learn to Drive.
            <span className="block text-accent-400">Learn to Arrive.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            {SCHOOL_BLURB}
          </p>
          <p className="mt-3 text-base font-semibold italic text-white/80 sm:text-lg">{SCHOOL_MOTTO}</p>

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
              <svg viewBox="0 0 20 20" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.15a1 1 0 01.99.84l.5 3a1 1 0 01-.55 1.05l-1.3.65a11.04 11.04 0 005.02 5.02l.65-1.3a1 1 0 011.05-.55l3 .5a1 1 0 01.84.99V17a1 1 0 01-1 1h-1C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {SCHOOL_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
