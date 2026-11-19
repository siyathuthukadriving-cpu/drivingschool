import Link from 'next/link'
import InfoPage from '@/components/InfoPage'
import { OFFICIAL, OFFICIAL_REVIEWED } from '@/lib/official'
import { pageMetadata, type Faq } from '@/lib/seo'
import { SCHOOL_PHONE_DISPLAY } from '@/lib/school'

const PATH = '/code-10-lessons'

export const metadata = pageMetadata({
  path: PATH,
  title: 'Code 10 Driving Lessons in Durban | Sathuthuka',
  description: `Code 10 truck and heavy-vehicle lessons with Sathuthuka in Verulam, for learners across Durban. WhatsApp or call ${SCHOOL_PHONE_DISPLAY}.`,
})

const FAQS: Faq[] = [
  {
    q: 'Can a Code 10 driver drive a Code 8 vehicle?',
    a: 'The categories printed on your licence card decide which vehicles you may drive, and the National Road Traffic Regulations set out what each category includes. Check the codes on your card, read our licence codes guide, or ask your testing centre to confirm for your licence.',
  },
  {
    q: 'How old do I have to be for Code 10?',
    a: 'You must be 18 or older for the Code 3 learner’s licence and for the Code C1 driving licence.',
  },
  {
    q: 'Which learner’s licence do I need?',
    a: 'A Code 3 learner’s licence, which covers motor vehicles with a gross vehicle mass over 3,500 kg.',
  },
  {
    q: 'Do you pick up Code 10 learners?',
    a: 'Yes. We offer pick-up for lessons anywhere in Durban and eThekwini.',
  },
  {
    q: 'What do Code 10 lessons cost?',
    a: `Message us on WhatsApp or call ${SCHOOL_PHONE_DISPLAY} for current Code 10 prices.`,
  },
]

export default function Page() {
  return (
    <InfoPage
      path={PATH}
      crumb="Code 10 lessons"
      h1="Code 10 Driving Lessons in Durban"
      lead={<p>Truck and heavy-vehicle training for your Code 10 (C1) licence from Sathuthuka Driving School in Verulam, for learners across Durban and eThekwini.</p>}
      service={{ name: 'Code 10 truck lessons', description: 'Code 10 (Code C1) heavy-vehicle driving lessons in Durban and eThekwini.' }}
      sections={[
        {
          heading: 'What Code 10 covers',
          paragraphs: [
            'Code 10 is the familiar name for the Code C1 driving licence. The government’s licence categories describe C1 as a motor vehicle, bus, minibus or goods vehicle with a gross vehicle mass between 3,500 kg and 16,000 kg. That covers many small and medium delivery trucks.',
            'For heavier rigid vehicles over 16,000 kg the category is Code C, and for articulated vehicles and combinations there are the EC1 and EC categories. Our licence codes guide sets them out side by side.',
          ],
        },
        {
          heading: 'Who it is for',
          bullets: [
            'People who need a heavy-vehicle licence for a job in delivery, logistics or construction.',
            'Code 8 drivers who want to move up to trucks.',
            'Anyone planning to work towards a Code 14 licence later.',
          ],
          after: [
            'If you will drive for reward, for example carrying passengers or certain goods, you may also need a professional driving permit (PrDP). Ask your testing centre what applies to the work you plan to do.',
          ],
        },
        {
          heading: 'Lessons with Sathuthuka',
          paragraphs: [
            'Sathuthuka teaches Code 10 and Code 14 truck training alongside its car lessons. Lessons cover the extra observation, mirror work, turning space and braking distance a heavier vehicle needs, as well as the yard manoeuvres and road driving in the K53 heavy-vehicle test.',
            'Tell us about your driving experience when you book so we can plan where to start.',
          ],
        },
        {
          heading: 'Learner’s requirements',
          paragraphs: [
            <>You need a Code 3 learner’s licence, and you must be 18 or older on the day of the test. The K53 learner’s test has three sections: rules of the road, road traffic signs and vehicle controls. Prepare with our <Link href="/practice" className="font-semibold text-brand-700 hover:underline">K53 practice tests</Link>, which include Code 10 material.</>,
          ],
        },
        {
          heading: 'Prices',
          paragraphs: [
            `Code 10 lesson prices depend on your experience and how many lessons you need. Message us on WhatsApp or call ${SCHOOL_PHONE_DISPLAY} for current prices.`,
          ],
        },
      ]}
      faqs={FAQS}
      sources={[OFFICIAL.driving, OFFICIAL.learners]}
      reviewed={OFFICIAL_REVIEWED}
      linksHeading="Related pages"
      links={[
        { href: '/code-14-lessons', label: 'Code 14 heavy-vehicle lessons' },
        { href: '/code-8-lessons', label: 'Code 8 driving lessons' },
        { href: '/licence-codes', label: 'South African licence codes explained' },
        { href: '/learners-licence-durban', label: 'Learner’s licence preparation in Durban' },
        { href: '/driving-school-durban', label: 'Driving school in Durban' },
        { href: '/driving-school-verulam', label: 'Driving school in Verulam' },
        { href: '/contact', label: 'Contact the school' },
      ]}
    />
  )
}
