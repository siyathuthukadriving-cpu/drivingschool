import Link from 'next/link'
import InfoPage from '@/components/InfoPage'
import { OFFICIAL, OFFICIAL_REVIEWED } from '@/lib/official'
import { pageMetadata, type Faq } from '@/lib/seo'
import { SCHOOL_PHONE_DISPLAY } from '@/lib/school'

const PATH = '/motorcycle-lessons'

export const metadata = pageMetadata({
  path: PATH,
  title: 'Motorcycle Lessons in Durban | Sathuthuka',
  description: `Motorcycle licence training with Sathuthuka Driving School in Verulam, for learners in Durban and nearby areas. Call ${SCHOOL_PHONE_DISPLAY}.`,
})

const FAQS: Faq[] = [
  {
    q: 'Can I carry a passenger on a motorcycle learner’s licence?',
    a: 'No. The National Road Traffic Regulations say a learner’s licence for a motorcycle does not allow you to ride on a public road while carrying another person.',
  },
  {
    q: 'How old must I be?',
    a: 'For the Code 1 learner’s licence you must be 16 or older for a motorcycle of up to 125 cc, and 18 or older for a bigger motorcycle. For the driving licence, Code A1 (up to 125 cc) is from 17, and Code A (over 125 cc) is from 18.',
  },
  {
    q: 'How do I book motorcycle lessons?',
    a: `WhatsApp or call ${SCHOOL_PHONE_DISPLAY} for current prices and lesson times.`,
  },
]

export default function Page() {
  return (
    <InfoPage
      path={PATH}
      crumb="Motorcycle lessons"
      h1="Motorcycle Lessons in Durban"
      lead={<p>Training for your motorcycle licence with Sathuthuka Driving School, for riders across Durban and eThekwini.</p>}
      service={{ name: 'Motorcycle lessons', description: 'Motorcycle licence (Code A1 and A) training in Durban and eThekwini.' }}
      sections={[
        {
          heading: 'Motorcycle training at Sathuthuka',
          paragraphs: [
            'Riding in Durban traffic asks a lot of a new rider: reading the road early, positioning so you are seen, and handling wet surfaces when the summer storms arrive. Our motorcycle training prepares you for the K53 motorcycle test and for riding safely afterwards.',
            'Tell us which licence you are aiming for and how much riding you have done when you book.',
          ],
        },
        {
          heading: 'Learner’s rules for motorcycles',
          bullets: [
            'You need a Code 1 learner’s licence: 16 or older for a motorcycle up to 125 cc, 18 or older above 125 cc.',
            'A motorcycle learner’s licence does not allow you to carry a passenger on a public road.',
            'The learner’s licence is valid for 24 months and cannot be extended.',
            <>The driving licence is Code A1 (up to 125 cc, from 17) or Code A (over 125 cc, from 18). See <Link href="/licence-codes" className="font-semibold text-brand-700 hover:underline">licence codes explained</Link>.</>,
          ],
        },
        {
          heading: 'How to book',
          paragraphs: [
            <>WhatsApp or call {SCHOOL_PHONE_DISPLAY}. Still need your learner’s? Start with our <Link href="/learners-licence-durban" className="font-semibold text-brand-700 hover:underline">learner’s licence preparation</Link>.</>,
          ],
        },
      ]}
      faqs={FAQS}
      sources={[OFFICIAL.learners, OFFICIAL.driving, OFFICIAL.manual]}
      reviewed={OFFICIAL_REVIEWED}
      linksHeading="Related pages"
      links={[
        { href: '/licence-codes', label: 'South African licence codes explained' },
        { href: '/learners-licence-durban', label: 'Learner’s licence preparation in Durban' },
        { href: '/', label: 'Sathuthuka Driving School home' },
        { href: '/contact', label: 'Contact the school' },
      ]}
    />
  )
}
