import Link from 'next/link'
import InfoPage from '@/components/InfoPage'
import { OFFICIAL, OFFICIAL_REVIEWED } from '@/lib/official'
import { pageMetadata, type Faq } from '@/lib/seo'
import { SCHOOL_PHONE_DISPLAY } from '@/lib/school'

const PATH = '/code-8-lessons'

export const metadata = pageMetadata({
  path: PATH,
  title: 'Code 8 Driving Lessons in Durban | Sathuthuka',
  description: `Code 8 (light vehicle) driving lessons with Sathuthuka Driving School in Verulam, serving Durban and Durban North. WhatsApp or call ${SCHOOL_PHONE_DISPLAY}.`,
})

const FAQS: Faq[] = [
  {
    q: 'What is the difference between Code 8 and Code 10?',
    a: 'Code 8 is the everyday name for a Code B licence, for vehicles with a gross vehicle mass of up to 3,500 kg, such as cars and bakkies. Code 10 is the everyday name for Code C1, for vehicles between 3,500 kg and 16,000 kg, such as small trucks.',
  },
  {
    q: 'How many driving lessons will I need?',
    a: 'It depends on how much driving you have done before and how quickly you become confident in traffic. We will talk about your experience when you book and recommend a plan, rather than give a fixed number up front.',
  },
  {
    q: 'Do you teach manual or automatic?',
    a: 'Both. If you pass your driving test in an automatic car, your licence is endorsed for automatic vehicles only, so choose manual if you may need to drive a manual car or bakkie later.',
  },
  {
    q: 'Can you pick me up for lessons?',
    a: 'Yes. We offer pick-up for lessons anywhere in Durban and eThekwini.',
  },
  {
    q: 'How do I book Code 8 lessons?',
    a: `WhatsApp or call ${SCHOOL_PHONE_DISPLAY}. Tell us whether you want manual or automatic, where to pick you up and when you are free.`,
  },
]

export default function Page() {
  return (
    <InfoPage
      path={PATH}
      crumb="Code 8 lessons"
      h1="Code 8 Driving Lessons in Durban"
      lead={<p>Manual and automatic Code 8 lessons for cars and bakkies, from your first time behind the wheel to your K53 driving test, with pick-up anywhere in Durban and eThekwini.</p>}
      service={{ name: 'Code 8 driving lessons', description: 'Manual and automatic light motor vehicle (Code B) driving lessons in Durban and eThekwini.' }}
      sections={[
        {
          heading: 'What a Code 8 licence is',
          paragraphs: [
            'Code 8 is the name most South Africans still use for the Code B driving licence. Under the government’s licence categories, Code B covers a motor vehicle, including a minibus, bus or goods vehicle, with a gross vehicle mass of not more than 3,500 kg. In everyday terms that is your car, hatchback or bakkie.',
            'You must be 18 or older to apply for the Code B driving licence, and you need a valid Code 2 learner’s licence first.',
          ],
        },
        {
          heading: 'Who these lessons are for',
          bullets: [
            'First-time drivers who have just passed their learner’s and have never driven on a public road.',
            'Learners who have practised with family and now want to prepare properly for the K53 driving test.',
            'Drivers who learnt in an automatic and want to move to a manual car, or the other way round.',
            'People across Durban and eThekwini, from the CBD and Durban North to Verulam, who want to be collected for lessons.',
          ],
        },
        {
          heading: 'How lessons work',
          paragraphs: [
            'Every learner starts in a different place, so we begin by finding out what you already know. Lessons build from moving off, steering and stopping smoothly to junctions, traffic circles, lane changes and parking, then to the observation and manoeuvres the examiner looks for in the K53 practical test.',
            'We pick you up for your lesson, so you learn on real Durban roads, from quiet suburban streets to busier routes, as your confidence grows. Our approach is the one we have taught with for over 30 years: we build drivers, not just licence holders.',
          ],
        },
        {
          heading: 'Learner’s licence first',
          paragraphs: [
            <>Before you can have lessons on a public road you need a Code 2 learner’s licence. You must be 17 or older on the day of the test, and the learner’s is valid for 24 months. While you hold it, you may only drive when a licensed driver supervises you.</>,
            <>Prepare with our <Link href="/learners-licence-durban" className="font-semibold text-brand-700 hover:underline">learner’s licence preparation for Durban</Link> and the free <Link href="/practice" className="font-semibold text-brand-700 hover:underline">K53 practice tests</Link>.</>,
          ],
        },
        {
          heading: 'What a lesson costs',
          paragraphs: [
            `We give you current Code 8 lesson prices directly, because the right number of lessons depends on your experience. Message us on WhatsApp or call ${SCHOOL_PHONE_DISPLAY} for current prices.`,
          ],
        },
      ]}
      faqs={FAQS}
      sources={[OFFICIAL.driving, OFFICIAL.learners]}
      reviewed={OFFICIAL_REVIEWED}
      linksHeading="Related pages"
      links={[
        { href: '/automatic-driving-lessons-durban', label: 'Automatic driving lessons in Durban' },
        { href: '/code-10-lessons', label: 'Code 10 truck lessons' },
        { href: '/licence-codes', label: 'South African licence codes explained' },
        { href: '/learners-licence-durban', label: 'Learner’s licence preparation in Durban' },
        { href: '/practice', label: 'Free K53 practice tests' },
        { href: '/driving-school-durban', label: 'Driving school in Durban' },
        { href: '/driving-school-durban-north', label: 'Driving school in Durban North' },
        { href: '/contact', label: 'Contact the school' },
      ]}
    />
  )
}
