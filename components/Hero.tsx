import WhatsAppIcon from './WhatsAppIcon'
import {
  SCHOOL_BLURB,
  SCHOOL_BOOKING_URL,
  SCHOOL_PHONE_DISPLAY,
  SCHOOL_PHONE_TEL,
  SCHOOL_RATING,
} from '@/lib/school'

/**
 * Full-width hero of the landing page: royal-blue gradient with a soft road-line pattern.
 * Drop a photo into /public and add it as the first child (an <Image fill />) to show it
 * behind the blue overlay.
 */
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-700 text-white">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(55% 60% at 85% 20%, rgba(249,115,22,0.30), transparent 65%), radial-gradient(60% 70% at 0% 100%, rgba(8,13,43,0.55), transparent 70%)',
        }}
        aria-hidden="true"
      />
      <svg
        className="absolute inset-0 -z-10 h-full w-full opacity-[0.12]"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <path d="M-100 520 Q300 360 620 420 T1300 240" stroke="white" strokeWidth="110" />
        <path d="M-100 520 Q300 360 620 420 T1300 240" stroke="white" strokeWidth="4" strokeDasharray="22 22" />
      </svg>

      <div className="section-container pb-44 pt-32 sm:pb-52 sm:pt-44 lg:pb-60 lg:pt-52">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
            <svg viewBox="0 0 20 20" className="h-4 w-4 fill-accent-400" aria-hidden="true">
              <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.68l5.34-.78z" />
            </svg>
            {SCHOOL_RATING}
          </div>

          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Learn to Drive
            <span className="block text-accent-500">with Confidence</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">{SCHOOL_BLURB}</p>

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
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl border-2 border-white/35 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur transition-colors hover:bg-white/20 active:scale-[0.98]"
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
