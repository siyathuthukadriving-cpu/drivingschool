import Link from 'next/link'
import { ACCESS_PRICE } from '@/lib/contact'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current" aria-hidden="true">
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  )
}

/** Header of the online practice platform (/practice). The school landing page lives at "/". */
export default function PracticeHero() {
  return (
    <section className="relative bg-brand-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(55% 70% at 90% 10%, rgba(224,146,1,0.18), transparent 60%), radial-gradient(50% 60% at 0% 100%, rgba(203,18,13,0.28), transparent 65%)',
        }}
        aria-hidden="true"
      />
      <div className="relative section-container py-14 sm:py-20 text-center">
        <span className="inline-block text-xs font-bold text-accent-300 uppercase tracking-widest border border-accent-500/40 bg-accent-500/10 rounded-full px-4 py-1.5 mb-5">
          Learner’s licence prep
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-balance max-w-3xl mx-auto">
          Practise for your K53 learner’s licence online
        </h1>
        <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Exam-style practice tests covering road signs, vehicle controls and rules of the road for Code 8, Code 10 and Code 14.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Link
            href="/courses"
            className="bg-brand-600 text-white font-bold px-8 py-4 rounded-full text-base hover:bg-brand-500 transition-all duration-200 shadow-hero inline-flex items-center gap-2 hover:gap-3 active:scale-[0.97] w-full sm:w-auto justify-center"
          >
            Start practising
            <ArrowIcon />
          </Link>
          <Link
            href="/pricing"
            className="bg-white/5 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full text-base hover:bg-white/15 hover:border-white/60 transition-all duration-200 inline-flex items-center justify-center active:scale-[0.97] w-full sm:w-auto"
          >
            Get full access — {ACCESS_PRICE}
          </Link>
        </div>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-2" aria-label="What is included">
          {['Code 8, 10 & 14', 'Road signs', 'Vehicle controls', 'Rules of the road', 'Live Notes'].map(item => (
            <li key={item} className="text-xs sm:text-sm font-semibold text-white/90 border border-white/20 bg-white/5 rounded-full px-3.5 py-1.5">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 48" fill="none" className="w-full h-8 sm:h-12" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 48h1440V24C1200 0 960 48 720 48S240 0 0 24v24z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  )
}
