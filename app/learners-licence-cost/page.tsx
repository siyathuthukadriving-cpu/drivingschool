import Link from 'next/link'
import InfoPage from '@/components/InfoPage'
import { OFFICIAL, OFFICIAL_REVIEWED } from '@/lib/official'
import { pageMetadata, type Faq } from '@/lib/seo'
import { ACCESS_DURATION_DAYS, ACCESS_PRICE } from '@/lib/contact'

const PATH = '/learners-licence-cost'

const A = 'font-semibold text-brand-700 hover:underline'

export const metadata = pageMetadata({
  path: PATH,
  title: 'Learner’s Licence Cost in South Africa',
  description: 'What a learner’s licence costs in South Africa, including the booking and issue fees. Always confirm the current eThekwini or KZN fee with your DLTC.',
})

const FAQS: Faq[] = [
  {
    q: 'Is the fee the same everywhere?',
    a: 'Not necessarily. The government tells applicants to contact their local licensing office for the cost, so confirm the current amount with the DLTC where you will write.',
  },
  {
    q: 'Do I pay again if I fail?',
    a: 'You pay the issue fee only if you pass. If you fail, you need to book again, and that means paying the booking fee again. Confirm the rebooking process and amount with your centre.',
  },
  {
    q: 'Does Sathuthuka charge for online practice?',
    a: `Some of our K53 practice is free. Full access to our practice tests costs ${ACCESS_PRICE} for ${ACCESS_DURATION_DAYS} days. This is Sathuthuka’s own product and is not a government fee.`,
  },
]

export default function Page() {
  return (
    <InfoPage
      path={PATH}
      crumb="Learner’s licence cost"
      h1="How Much Does a Learner’s Licence Cost?"
      cta="practice"
      lead={<p>What you pay for a learner’s licence in South Africa, and why you should confirm the current amount with your testing centre in eThekwini or elsewhere in KwaZulu-Natal before you go.</p>}
      sections={[
        {
          heading: 'Booking fee and issue fee',
          paragraphs: [
            'According to the national government’s guide, there are two payments. You pay a booking fee when you book your test, and if you pass, you pay an issue fee before your learner’s licence is handed to you on the same day.',
          ],
        },
        {
          heading: 'Why you must confirm the local amount',
          paragraphs: [
            'The government guide does not list a national price. It tells applicants to contact their local licensing office for the cost. Fees are reviewed from time to time, and figures quoted on blogs and older web pages are often out of date.',
            'Before you go, phone or visit your DLTC and ask for the current booking fee and issue fee, and which payment methods it accepts.',
          ],
        },
        {
          heading: 'KwaZulu-Natal and eThekwini',
          paragraphs: [
            <>The KZN Department of Transport’s learner’s licence page lists fee amounts, but that page also carries old COVID-era notices, so do not rely on its figures as current. Confirm with your centre. Our <Link href="/how-to-book-learners-licence-durban" className={A}>booking guide</Link> covers the documents you need, and the <Link href="/centers" className={A}>test centre finder</Link> helps you find a KZN centre.</>,
          ],
        },
        {
          heading: 'If you fail and rebook',
          paragraphs: [
            'The issue fee is only paid if you pass. If you do not pass, you will need to book another test, which means another booking fee. The KZN Department of Transport also warns that arriving late or without the right documents can mean you cannot write and lose your fee.',
          ],
        },
        {
          heading: 'Practise before you pay to write',
          paragraphs: [
            <>The cheapest test is the one you only book once. Work through our <Link href="/practice" className={A}>K53 practice tests</Link> and the free <Link href="/k53-learners-study-guide" className={A}>study guide</Link> until you can pass each section comfortably. Full practice access costs {ACCESS_PRICE} for {ACCESS_DURATION_DAYS} days. That is Sathuthuka’s price, not a government fee.</>,
          ],
        },
      ]}
      faqs={FAQS}
      sources={[OFFICIAL.learners, OFFICIAL.kzn]}
      reviewed={OFFICIAL_REVIEWED}
      linksHeading="Learner’s licence guides"
      links={[
        { href: '/how-to-book-learners-licence-durban', label: 'How to book a learner’s licence in Durban' },
        { href: '/practice', label: 'K53 practice tests' },
        { href: '/learners-licence-durban', label: 'Learner’s licence preparation in Durban' },
        { href: '/centers', label: 'Find a test centre' },
      ]}
    />
  )
}
