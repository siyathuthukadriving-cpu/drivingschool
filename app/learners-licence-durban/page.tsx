import Link from 'next/link'
import InfoPage from '@/components/InfoPage'
import { OFFICIAL, OFFICIAL_REVIEWED } from '@/lib/official'
import { pageMetadata, type Faq } from '@/lib/seo'
import { ACCESS_DURATION_DAYS, ACCESS_PRICE } from '@/lib/contact'
import { SCHOOL_PHONE_DISPLAY } from '@/lib/school'

const PATH = '/learners-licence-durban'

const A = 'font-semibold text-brand-700 hover:underline'

export const metadata = pageMetadata({
  path: PATH,
  title: 'Learner’s Licence Prep in Durban | Sathuthuka',
  description: `Prepare for your K53 learner’s licence in Durban with Sathuthuka: free study guide, practice tests and a guide to booking at a local DLTC. Call ${SCHOOL_PHONE_DISPLAY}.`,
})

const FAQS: Faq[] = [
  {
    q: 'How many questions are on the learner’s test?',
    a: 'The K53 learner’s test has 64 questions: 28 on rules of the road, 28 on road traffic signs and 8 on vehicle controls. You need at least 22 out of 28 for rules of the road, 23 out of 28 for road signs and 6 out of 8 for vehicle controls, and you must pass all three sections.',
  },
  {
    q: 'How long is a learner’s licence valid?',
    a: 'A learner’s licence is valid for 24 months and cannot be extended.',
  },
  {
    q: 'Can I drive alone with a learner’s licence?',
    a: 'No. A learner driver must be supervised by a licensed driver.',
  },
  {
    q: 'Which learner’s licence do I need for a car?',
    a: 'Code 2, for light motor vehicles up to 3,500 kg gross vehicle mass. You must be 17 or older. For trucks you need Code 3 (18 or older), and for motorcycles Code 1.',
  },
  {
    q: 'Where do I write the test in Durban?',
    a: 'At a driving licence testing centre (DLTC). Use our centres finder and booking guide, and confirm times and requirements with the centre before you go.',
  },
]

export default function Page() {
  return (
    <InfoPage
      path={PATH}
      crumb="Learner’s licence"
      h1="Learner’s Licence Preparation in Durban"
      cta="practice"
      lead={<p>Everything you need to get your K53 learner’s licence in Durban and eThekwini: a free study guide, online practice tests, and a clear guide to booking your test at a local DLTC. Once you pass, start driving lessons with Sathuthuka.</p>}
      sections={[
        {
          heading: 'Prepare for the K53 test',
          paragraphs: [
            'The learner’s licence test checks that you understand the rules of the road, road traffic signs and the controls of the vehicle you will learn in. You need it before you can take driving lessons on public roads.',
            <>Start with our free <Link href="/k53-learners-study-guide" className={A}>K53 learners study guide</Link>, which explains each section of the test in plain language. Then check which learner’s code you need on our <Link href="/licence-codes" className={A}>licence codes page</Link>.</>,
          ],
        },
        {
          heading: 'Practise online',
          paragraphs: [
            <>Our <Link href="/practice" className={A}>K53 practice tests</Link> let you try questions on signs, rules and controls for Code 8, Code 10 and Code 14, and see where you need more work. Some practice is free. Full access costs {ACCESS_PRICE} for {ACCESS_DURATION_DAYS} days.</>,
            'Practise until you are scoring well in every section, not just overall. The test is marked section by section, so a weak score in one section means you fail even if the others are strong.',
          ],
        },
        {
          heading: 'Booking your test at a Durban / eThekwini DLTC',
          paragraphs: [
            'In KwaZulu-Natal you apply for your learner’s licence in person at a driving licence testing centre. You need your ID, identical ID photos, proof of address and the booking fee.',
            <>Our <Link href="/how-to-book-learners-licence-durban" className={A}>learner’s licence booking guide</Link> covers the documents and what happens on the day, and our <Link href="/learners-licence-cost" className={A}>learner’s licence cost guide</Link> explains the fees. Use the <Link href="/centers" className={A}>test centre finder</Link> to look up centres in KwaZulu-Natal.</>,
          ],
        },
        {
          heading: 'What the test includes',
          table: {
            caption: 'K53 learner’s licence test sections and pass marks',
            head: ['Section', 'Questions', 'Pass mark'],
            rows: [
              ['Rules of the road', '28', '22 out of 28'],
              ['Road traffic signs', '28', '23 out of 28'],
              ['Vehicle controls', '8', '6 out of 8'],
            ],
          },
          after: [
            'There is also an eye test, done at the testing centre or by an optometrist. If you pass and pay the issue fee, your learner’s licence is issued on the same day.',
            <>After that you can book <Link href="/code-8-lessons" className={A}>Code 8 driving lessons</Link> with us, with pick-up anywhere in Durban and eThekwini.</>,
          ],
        },
      ]}
      faqs={FAQS}
      sources={[OFFICIAL.learners, OFFICIAL.passMarks, OFFICIAL.kzn]}
      reviewed={OFFICIAL_REVIEWED}
      linksHeading="Learner’s licence guides"
      links={[
        { href: '/practice', label: 'K53 practice tests' },
        { href: '/k53-learners-study-guide', label: 'Free K53 learners study guide' },
        { href: '/how-to-book-learners-licence-durban', label: 'How to book a learner’s licence in Durban' },
        { href: '/learners-licence-cost', label: 'Learner’s licence cost' },
        { href: '/licence-codes', label: 'Licence codes explained' },
        { href: '/centers', label: 'Find a test centre' },
        { href: '/code-8-lessons', label: 'Code 8 driving lessons' },
        { href: '/contact', label: 'Contact the school' },
      ]}
    />
  )
}
