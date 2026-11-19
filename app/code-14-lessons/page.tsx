import Link from 'next/link'
import InfoPage from '@/components/InfoPage'
import { OFFICIAL, OFFICIAL_REVIEWED } from '@/lib/official'
import { pageMetadata, type Faq } from '@/lib/seo'
import { SCHOOL_PHONE_DISPLAY } from '@/lib/school'

const PATH = '/code-14-lessons'

export const metadata = pageMetadata({
  path: PATH,
  title: 'Code 14 Driving Lessons in Durban | Sathuthuka',
  description: `Code 14 heavy-vehicle training with Sathuthuka Driving School in Verulam, serving Durban learners. WhatsApp or call ${SCHOOL_PHONE_DISPLAY}.`,
})

const FAQS: Faq[] = [
  {
    q: 'What is the official name for Code 14?',
    a: 'Code 14 is the everyday name for the Code EC driving licence, for articulated heavy vehicles and heavy combinations over 16,000 kg.',
  },
  {
    q: 'How old must I be?',
    a: 'You must be 18 or older for the Code 3 learner’s licence and for the Code EC driving licence.',
  },
  {
    q: 'Do you pick up Code 14 learners?',
    a: 'Yes. We offer pick-up for lessons anywhere in Durban and eThekwini.',
  },
  {
    q: 'How do I book Code 14 training?',
    a: `WhatsApp or call ${SCHOOL_PHONE_DISPLAY}. Tell us which licence you hold now and your heavy-vehicle experience, and we will explain where to start and give you current prices.`,
  },
]

export default function Page() {
  return (
    <InfoPage
      path={PATH}
      crumb="Code 14 lessons"
      h1="Code 14 Driving Lessons in Durban"
      lead={<p>Training for the Code 14 (EC) licence for articulated trucks and heavy combinations, from Sathuthuka Driving School in Verulam, for learners across Durban and eThekwini.</p>}
      service={{ name: 'Code 14 heavy-vehicle lessons', description: 'Code 14 (Code EC) articulated heavy-vehicle driving lessons in Durban and eThekwini.' }}
      sections={[
        {
          heading: 'What Code 14 is for',
          paragraphs: [
            'Code 14 is what most people call the Code EC driving licence. According to the government’s licence categories, Code EC is for an articulated heavy motor vehicle (a heavy vehicle drawing one or more trailers) with a gross combination mass over 16,000 kg, or a combination of a bus or goods vehicle with a gross vehicle mass over 16,000 kg.',
            'In practice it is the licence for long-haul trucks, truck-tractors with semi-trailers, and the big rigs that move goods in and out of the Port of Durban.',
          ],
        },
        {
          heading: 'How it differs from Code 10',
          table: {
            caption: 'Code 10 (C1) compared with Code 14 (EC)',
            head: ['', 'Code 10 (C1)', 'Code 14 (EC)'],
            rows: [
              ['Vehicle', 'Motor vehicle, bus, minibus or goods vehicle', 'Articulated heavy vehicle or heavy combination'],
              ['Mass', 'Gross vehicle mass between 3,500 kg and 16,000 kg', 'Gross combination mass over 16,000 kg'],
              ['Minimum age', '18', '18'],
            ],
          },
          after: [
            'The practical test for an articulated vehicle is done with the semi-trailer or trailer attached, so you train with the full combination.',
          ],
        },
        {
          heading: 'Training with Sathuthuka',
          paragraphs: [
            'Code 14 lessons focus on what changes when the vehicle bends in the middle: wider turning paths, trailer swing, reversing an articulated combination, coupling awareness and the much longer stopping distances of a loaded rig. We plan lessons around the experience you already have.',
            <>You need a Code 3 learner’s licence first. Our <Link href="/learners-licence-durban" className="font-semibold text-brand-700 hover:underline">learner’s licence preparation</Link> helps you get ready for the K53 test.</>,
          ],
        },
        {
          heading: 'How to book',
          paragraphs: [
            `WhatsApp or call ${SCHOOL_PHONE_DISPLAY} for current Code 14 prices and to agree your lesson times and pick-up point.`,
          ],
        },
      ]}
      faqs={FAQS}
      sources={[OFFICIAL.driving]}
      reviewed={OFFICIAL_REVIEWED}
      linksHeading="Related pages"
      links={[
        { href: '/code-10-lessons', label: 'Code 10 truck lessons' },
        { href: '/licence-codes', label: 'South African licence codes explained' },
        { href: '/driving-school-durban', label: 'Driving school in Durban' },
        { href: '/driving-school-verulam', label: 'Driving school in Verulam' },
        { href: '/contact', label: 'Contact the school' },
      ]}
    />
  )
}
