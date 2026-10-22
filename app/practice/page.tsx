import type { Metadata } from 'next'
import Link from 'next/link'
import BookSlideshow from '@/components/BookSlideshow'
import BuyAccessButton from '@/components/BuyAccessButton'
import GamificationTeaser from '@/components/GamificationTeaser'
import PracticeHero from '@/components/PracticeHero'
import { hasFullAccess } from '@/lib/access'
import { WHATSAPP_URL, ACCESS_PRICE, ACCESS_PRICE_ORIGINAL, ACCESS_DURATION_DAYS } from '@/lib/contact'
import { SITE_URL } from '@/lib/school'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Free K53 Learner's Licence Practice Tests South Africa",
  description: "Study for your South African learner's licence with free K53 practice tests. Covers road signs, vehicle controls, and rules of the road for Code 8, Code 10 and Code 14. Pass first time.",
  keywords: [
    "learners licence test South Africa", "K53 practice test", "free learners licence test",
    "K53 questions and answers", "learners licence road signs", "learners licence rules of the road",
    "Code 8 learners licence", "Code 10 learners licence", "how to pass learners licence",
    "learners licence study guide South Africa", "K53 learner driver manual",
    "learners test questions South Africa", "learners licence test online free",
  ],
  alternates: { canonical: `${SITE_URL}/practice` },
  openGraph: {
    title: "Free K53 Learner's Licence Practice Tests | Thompho’s Driving Academy",
    description: "Pass your South African learner's licence first time. Free K53 practice tests for Code 8, Code 10 and Code 14 — road signs, vehicle controls, rules of the road.",
    url: `${SITE_URL}/practice`,
  },
}

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "K53 Learner's Licence Practice Tests",
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  url: `${SITE_URL}/courses`,
  description: "Interactive K53 practice tests for the South African learner's licence — road signs, vehicle controls, rules of the road.",
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'ZAR',
    description: "Free learner's licence practice tests",
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "How many questions are on the South African learner's licence test?",
      acceptedAnswer: { '@type': 'Answer', text: 'The K53 learner\'s licence test has 64 questions divided into three sections: Road signs (28 questions, pass mark 23), Rules of the road (28 questions, pass mark 22), and Vehicle controls (8 questions, pass mark 6). You must pass all three sections to pass the test.' },
    },
    {
      '@type': 'Question',
      name: "What mark do you need to pass the learner's licence test?",
      acceptedAnswer: { '@type': 'Answer', text: 'You need to pass all three sections of the K53 test: at least 23/28 (82%) for road signs, at least 22/28 (79%) for rules of the road, and at least 6/8 (75%) for vehicle controls. Failing even one section means you fail the entire test.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a Code 8 and Code 10 learner\'s licence?',
      acceptedAnswer: { '@type': 'Answer', text: 'Code 8 commonly refers to a Code B driving licence for light vehicles up to 3,500 kg GVM. Code 10 commonly refers to Code C1 for vehicles over 3,500 kg and up to 16,000 kg GVM. When booking a learner\'s test, the official learner categories are Code 1, Code 2 and Code 3, so confirm the correct category with your DLTC.' },
    },
    {
      '@type': 'Question',
      name: "How do I book a learner's licence test in South Africa?",
      acceptedAnswer: { '@type': 'Answer', text: 'Gauteng residents should apply through the official eNaTIS online portal. In other areas, contact or visit your nearest Driving Licence Testing Centre because online availability and booking procedures vary. Fees also vary by testing centre or municipality.' },
    },
    {
      '@type': 'Question',
      name: "What documents do I need for the learner's licence test?",
      acceptedAnswer: { '@type': 'Answer', text: 'Take your identity document, the number of ID photographs required by your DLTC, proof of postal and residential address, the booking fee and a completed LL1 application form. Applicants aged 65 or older must also complete a Medical Certificate form.' },
    },
    {
      '@type': 'Question',
      name: "Can I practise for the K53 learner's licence test online?",
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Thompho’s offers free K53 practice tests online covering all three sections. Practising with timed tests regularly is the best way to prepare and pass first time.' },
    },
  ],
}

function FeatureIcon({ type }: { type: 'signs' | 'controls' | 'rules' }) {
  const icons = {
    signs: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" aria-hidden="true">
        <rect x="8" y="6" width="32" height="26" rx="4" className="fill-red-100 stroke-red-500" strokeWidth="2" />
        <circle cx="24" cy="19" r="7" className="fill-red-500/20 stroke-red-500" strokeWidth="2" />
        <rect x="22" y="32" width="4" height="12" rx="1" className="fill-gray-300" />
      </svg>
    ),
    controls: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" aria-hidden="true">
        <rect x="6" y="16" width="36" height="20" rx="6" className="fill-brand-100 stroke-brand-500" strokeWidth="2" />
        <circle cx="16" cy="36" r="5" className="fill-gray-200 stroke-gray-400" strokeWidth="2" />
        <circle cx="32" cy="36" r="5" className="fill-gray-200 stroke-gray-400" strokeWidth="2" />
        <rect x="10" y="18" width="12" height="7" rx="2" className="fill-brand-200/60 stroke-brand-400" strokeWidth="1.5" />
        <circle cx="35" cy="22" r="3" className="fill-amber-300 stroke-amber-500" strokeWidth="1.5" />
      </svg>
    ),
    rules: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" aria-hidden="true">
        <rect x="10" y="6" width="28" height="36" rx="3" className="fill-emerald-50 stroke-emerald-500" strokeWidth="2" />
        <line x1="16" y1="16" x2="32" y2="16" className="stroke-emerald-400" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="22" x2="28" y2="22" className="stroke-emerald-300" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="28" x2="30" y2="28" className="stroke-emerald-300" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 33 L21 37 L31 27" className="stroke-emerald-500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }
  return icons[type]
}

export default async function Home() {
  const fullAccess = await hasFullAccess()
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ─── Hero ─── */}
      <PracticeHero />

      {/* ─── Feature cards ─── */}
      <section className="py-14 sm:py-20 -mt-2">
        <div className="section-container">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-block text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full mb-3">Learner’s licence prep</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Practise online for your K53 test</h2>
            <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">Study road signs, vehicle controls and rules of the road, then take exam-style practice tests.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {([
              { type: 'signs' as const, title: 'Road Signs', desc: 'Learn South African road signs through clear images and exam-style questions.' },
              { type: 'controls' as const, title: 'Vehicle Controls', desc: 'Identify vehicle controls and understand their correct functions.' },
              { type: 'rules' as const, title: 'Rules of the Road', desc: 'Master speed limits, stopping rules, right of way and South African traffic laws.' },
            ]).map(card => (
              <div key={card.type} className="card-elevated p-7 sm:p-8 text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-50 mb-5 group-hover:scale-110 transition-transform duration-300">
                  <FeatureIcon type={card.type} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How it works ─── */}
      <section className="py-14 sm:py-20 bg-white border-t border-gray-100">
        <div className="section-container">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-block text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full mb-3">Simple process</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Pass in 3 steps</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10 max-w-4xl mx-auto">
            {([
              {
                step: '1',
                color: 'bg-brand-50 text-brand-600',
                title: 'Study the material',
                desc: 'Read the Road Signs Manual and study guide chapter by chapter. Know exactly what to expect before you sit the test.',
              },
              {
                step: '2',
                color: 'bg-amber-50 text-amber-600',
                title: 'Take practice tests',
                desc: 'Work through 350+ exam-style questions covering road signs, vehicle controls, and rules of the road — timed just like the real test.',
              },
              {
                step: '3',
                color: 'bg-green-50 text-green-600',
                title: 'Pass first time',
                desc: 'Go in confident. Our learners report a 90% pass rate after completing the course and practice tests.',
              },
            ]).map(({ step, color, title, desc }) => (
              <div key={step} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
                <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center text-xl font-extrabold shrink-0`}>
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/courses" className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm">
              Start Practising Free
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current" aria-hidden="true"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </Link>
            <p className="text-xs text-gray-400 mt-3 italic">Pass rate based on outcomes reported by learners who completed the course.</p>
          </div>
        </div>
      </section>

      {/* ─── Gamification teaser ─── */}
      <GamificationTeaser />

      {/* ─── Live Notes callout ─── */}
      <section className="py-0">
        <div className="section-container">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-center gap-5 sm:gap-8 text-center sm:text-left my-10 sm:my-14">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-100 shrink-0">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-emerald-600 fill-current" aria-hidden="true">
                <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-bold text-emerald-900 mb-1">Road Signs Manual — Live Notes</h2>
              <p className="text-emerald-700 text-sm leading-relaxed">
                Read all 56 pages of the SA Road Traffic Signs manual chapter by chapter, then test yourself with a quiz on each chapter.
              </p>
            </div>
            <Link
              href="/live-notes"
              className="shrink-0 btn-accent px-6 py-3 text-sm inline-flex items-center gap-2"
            >
              Start Reading
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current" aria-hidden="true"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Free study guide hub ─── */}
      <section className="bg-gradient-to-r from-brand-50 to-accent-100 border-t border-b border-brand-100 px-4 py-12 sm:py-14 sm:px-6">
        <div className="section-container flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-2">Free K53 study guide</p>
            <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">Know the test before you practise</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
              Check the 64-question test structure, exact section pass marks, licence categories and booking checklist.
            </p>
          </div>
          <Link
            href="/k53-learners-study-guide"
            className="shrink-0 btn-primary px-6 py-3 text-sm inline-flex items-center gap-2"
          >
            Read the free K53 learners study guide
            <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current" aria-hidden="true"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </Link>
        </div>
      </section>

      {/* ─── Study Materials — Book Slideshow ─── */}
      <section className="py-14 sm:py-20">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full mb-3">Study Material</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Code 10 Memo — Part 1</h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
              {fullAccess
                ? 'Flip through all 122 study slides. Use the arrows or your keyboard to navigate.'
                : 'All 122 study slides are available with full access.'}
            </p>
          </div>

          {fullAccess ? (
            <BookSlideshow />
          ) : (
            <div className="card-elevated p-8 text-center max-w-md mx-auto">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-100 mb-4">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-gray-400 fill-current" aria-hidden="true">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">
                These 122 study slides are for full-access members. Unlock everything for{' '}
                <span className="line-through text-gray-400">{ACCESS_PRICE_ORIGINAL}</span>{' '}
                <strong className="text-brand-700">{ACCESS_PRICE}</strong>{' '}
                ({ACCESS_DURATION_DAYS} days).
              </p>

              <BuyAccessButton />

              <div className="flex items-center gap-3 my-4">
                <span className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400 uppercase tracking-wide">or</span>
                <span className="flex-1 h-px bg-gray-200" />
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border-2 border-green-600 text-green-700 font-semibold py-3 rounded-xl hover:bg-green-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.47 14.38c-.3-.15-1.74-.86-2-.95-.27-.1-.47-.15-.66.15-.2.3-.77.95-.94 1.15-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.18-.24-.57-.48-.5-.66-.5l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.74-.71 1.98-1.4.24-.68.24-1.27.17-1.4-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.5 9.5 0 01-4.84-1.33l-.35-.2-3.6.94.96-3.5-.23-.36a9.46 9.46 0 01-1.45-5.05c0-5.24 4.27-9.5 9.52-9.5 2.54 0 4.93.99 6.73 2.79a9.45 9.45 0 012.79 6.72c0 5.24-4.27 9.5-9.52 9.5zm5.55-15.05A11.43 11.43 0 0012.05 3C5.8 3 .72 8.08.72 14.33c0 2 .53 3.96 1.53 5.69L.64 26l6.13-1.61a11.4 11.4 0 005.28 1.34h.01c6.25 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.32-8.01z"/>
                </svg>
                Pay via WhatsApp instead
              </a>
              <Link href="/login" className="block text-brand-700 font-semibold mt-3 hover:underline text-sm">
                Already have an account? Log in
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ─── Pricing CTA ─── */}
      <section className="relative bg-gradient-to-br from-brand-700 to-brand-800 text-white py-14 sm:py-18 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative section-container">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Everything You Need to Prepare for Only {ACCESS_PRICE}
          </h2>
          <p className="text-gray-300 mb-8 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Get two months of access to lessons, practice tests, road signs, vehicle controls
            and rules of the road.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-8 py-4 rounded-full text-base hover:bg-brand-50 transition-all duration-200 shadow-hero active:scale-[0.97]"
          >
            Get Full Access for {ACCESS_PRICE}
            <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current" aria-hidden="true"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </Link>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-container max-w-3xl py-14 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8 text-center">
          Learner&apos;s Licence — Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {[
            {
              q: "How many questions are on the South African learner's licence test?",
              a: "The K53 test has 64 questions in three sections: Road signs (28 questions, pass mark 23), Rules of the road (28 questions, pass mark 22), and Vehicle controls (8 questions, pass mark 6). You must pass all three sections.",
            },
            {
              q: "What mark do you need to pass the learner's licence test?",
              a: "You need 23/28 (82%) for road signs, 22/28 (79%) for rules of the road, and 6/8 (75%) for vehicle controls. Failing any one section means you fail the entire test.",
            },
            {
              q: "What is the difference between a Code 8 and Code 10 learner's licence?",
              a: "Code 8 commonly refers to a Code B driving licence for light vehicles up to 3,500 kg GVM. Code 10 commonly refers to Code C1 for vehicles over 3,500 kg and up to 16,000 kg GVM. When booking a learner's test, the official learner categories are Code 1, Code 2 and Code 3, so confirm the correct category with your DLTC.",
            },
            {
              q: "How do I book a learner's licence test in South Africa?",
              a: "Gauteng residents should apply through the official eNaTIS online portal. In other areas, contact or visit your nearest Driving Licence Testing Centre because online availability and booking procedures vary. Fees also vary by testing centre or municipality.",
            },
            {
              q: "What documents do I need for the learner's licence test?",
              a: "Take your identity document, the number of ID photographs required by your DLTC, proof of postal and residential address, the booking fee and a completed LL1 application form. Applicants aged 65 or older must also complete a Medical Certificate form.",
            },
            {
              q: "Can I practise for the K53 learner's licence test online?",
              a: "Yes — Thompho’s offers free K53 practice tests online covering all three sections. Practising with timed tests regularly is the best way to prepare and pass first time.",
            },
          ].map(({ q, a }) => (
            <details key={q} className="card-elevated px-6 py-5 group cursor-pointer">
              <summary className="font-semibold text-gray-900 text-sm sm:text-base list-none flex items-center justify-between gap-3">
                {q}
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform duration-200 fill-current" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/courses" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base">
            Start Free Practice Tests
            <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current" aria-hidden="true"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </Link>
        </div>
      </section>

    </main>
  )
}
