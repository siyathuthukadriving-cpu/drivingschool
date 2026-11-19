import Link from 'next/link'
import InfoPage from '@/components/InfoPage'
import { OFFICIAL, OFFICIAL_REVIEWED } from '@/lib/official'
import { pageMetadata, type Faq } from '@/lib/seo'

const PATH = '/how-to-book-learners-licence-durban'

const A = 'font-semibold text-brand-700 hover:underline'

export const metadata = pageMetadata({
  path: PATH,
  title: 'How to Book a Learner’s Licence in Durban',
  description: 'How to book a learner’s licence test in Durban and eThekwini: documents, DLTCs, official booking routes, and what to confirm with the testing centre.',
})

const FAQS: Faq[] = [
  {
    q: 'Which documents do I need?',
    a: 'Your identity document, identical black-and-white ID photos (ask the centre how many), proof of residential and postal address, the booking fee and a completed LL1 application form. If you are 65 or older you also need a medical certificate.',
  },
  {
    q: 'Can I book a Durban learner’s test online?',
    a: 'The national government page describes applying at your driving licence testing centre, and it only points Gauteng residents to the eNaTIS online service. In KwaZulu-Natal, the provincial Department of Transport says you apply in person at a DLTC. Check with your centre or the official NaTIS site in case this has changed.',
  },
  {
    q: 'How much is the booking fee?',
    a: 'Fees are set by the licensing authority and can change. Confirm the current booking fee and issue fee with your DLTC. Our learner’s licence cost guide explains what you pay for.',
  },
  {
    q: 'Where is the nearest DLTC to Verulam, Durban North or the CBD?',
    a: 'Use our test centre finder to look up centres in KwaZulu-Natal, then phone or visit the centre to confirm its hours and booking times before you go.',
  },
]

export default function Page() {
  return (
    <InfoPage
      path={PATH}
      crumb="How to book a learner’s licence"
      h1="How to Book a Learner’s Licence Test in Durban"
      cta="practice"
      lead={<p>A step-by-step guide to booking and writing your K53 learner’s licence test at a driving licence testing centre (DLTC) in Durban, eThekwini or elsewhere in KwaZulu-Natal, based on official government guidance.</p>}
      sections={[
        {
          heading: 'Official documents to take',
          bullets: [
            'Your identity document. The KZN Department of Transport also asks for a certified copy.',
            'Identical black-and-white ID photos. Ask the centre how many it needs.',
            'Proof of residential and postal address. KZN asks for proof that is not older than three months. If the account is not in your name, take an affidavit. In an informal settlement, a letter from your ward councillor; in a rural area, a letter from the tribal authority.',
            'A completed form LL1, the application for a learner’s licence.',
            'A medical certificate if you are 65 or older.',
            'The booking fee.',
          ],
          after: [
            'The KZN Department of Transport warns that if you arrive late or without the right documents you may not be allowed to write, and you can lose the fee you paid.',
          ],
        },
        {
          heading: 'Where to book in eThekwini and KZN',
          paragraphs: [
            'You book at a driving licence testing centre. In KwaZulu-Natal you apply in person, and you can apply at any DLTC in the province, so choose one that is easy for you to reach on the day.',
            <>Use our <Link href="/centers" className={A}>test centre finder</Link> to look up centres in KwaZulu-Natal. Opening times and booking days differ between centres, so phone or visit before you go.</>,
          ],
        },
        {
          heading: 'Can I book online?',
          paragraphs: [
            <>The <a href={OFFICIAL.learners.href} target="_blank" rel="noopener noreferrer" className={A}>national government guide</a> only directs Gauteng residents to apply online through <a href={OFFICIAL.enatis.href} target="_blank" rel="noopener noreferrer" className={A}>eNaTIS</a>. It does not say the same for KwaZulu-Natal, and the KZN Department of Transport describes applying in person.</>,
            <>Online services do change, so check the official <a href={OFFICIAL.natis.href} target="_blank" rel="noopener noreferrer" className={A}>NaTIS website</a> or ask your centre before you rely on any online booking route. Be careful of unofficial websites that charge to “book” a test for you.</>,
          ],
        },
        {
          heading: 'What happens on the day',
          bullets: [
            'Arrive on time with your booking receipt and your ID.',
            'You do an eye test at the centre, unless you bring a test done by an optometrist.',
            'You write the K53 test: 64 questions on rules of the road, road traffic signs and vehicle controls. You must pass all three sections.',
          ],
        },
        {
          heading: 'After you pass',
          paragraphs: [
            'Pay the learner’s licence issue fee and your licence is issued on the same day. It is valid for 24 months and cannot be extended, and you may only drive while supervised by a licensed driver.',
            <>Now you can start driving lessons. Sathuthuka offers <Link href="/code-8-lessons" className={A}>Code 8 lessons</Link> with pick-up anywhere in Durban and eThekwini. Still preparing? Try our <Link href="/practice" className={A}>K53 practice tests</Link> or read the <Link href="/learners-licence-durban" className={A}>learner’s licence preparation guide</Link>.</>,
          ],
        },
      ]}
      faqs={FAQS}
      sources={[OFFICIAL.learners, OFFICIAL.kzn, OFFICIAL.natis, OFFICIAL.enatis]}
      reviewed={OFFICIAL_REVIEWED}
      linksHeading="Learner’s licence guides"
      links={[
        { href: '/learners-licence-cost', label: 'Learner’s licence cost' },
        { href: '/centers', label: 'Find a test centre' },
        { href: '/learners-licence-durban', label: 'Learner’s licence preparation in Durban' },
        { href: '/practice', label: 'K53 practice tests' },
        { href: '/k53-learners-study-guide', label: 'Free K53 learners study guide' },
        { href: '/contact', label: 'Contact the school' },
      ]}
    />
  )
}
