import Link from 'next/link'
import InfoPage from '@/components/InfoPage'
import { OFFICIAL, OFFICIAL_REVIEWED } from '@/lib/official'
import { pageMetadata, type Faq } from '@/lib/seo'

const PATH = '/licence-codes'

const A = 'font-semibold text-brand-700 hover:underline'

export const metadata = pageMetadata({
  path: PATH,
  title: 'South African Driving Licence Codes Explained',
  description: 'A plain guide to South African licence codes, including Code 8, Code 10 and Code 14, and which learner’s licence you need before you start lessons.',
})

const FAQS: Faq[] = [
  {
    q: 'What is Code 8?',
    a: 'Code 8 is the everyday name for the Code B driving licence, for motor vehicles with a gross vehicle mass up to 3,500 kg, which includes ordinary cars.',
  },
  {
    q: 'What are Code 10 and Code 14?',
    a: 'Code 10 is the everyday name for Code C1 (vehicles between 3,500 kg and 16,000 kg). Code 14 is the everyday name for Code EC (articulated heavy vehicles and heavy combinations over 16,000 kg).',
  },
  {
    q: 'Which learner’s licence do I need for a car?',
    a: 'A Code 2 learner’s licence, for light motor vehicles up to 3,500 kg. You must be 17 or older to get it, and 18 or older for the Code B driving licence.',
  },
  {
    q: 'Can one licence code cover other vehicles?',
    a: 'Your licence card shows exactly which categories you may drive. If you are unsure whether your code covers a particular vehicle, ask your driving licence testing centre.',
  },
]

export default function Page() {
  return (
    <InfoPage
      path={PATH}
      crumb="Licence codes"
      h1="South African Driving Licence Codes"
      lead={<p>A plain guide to the learner’s licence codes and driving licence codes used in South Africa, using the official government definitions, so you know which code to train for before you book lessons in Durban.</p>}
      sections={[
        {
          heading: 'Learner’s codes 1, 2 and 3',
          table: {
            caption: 'South African learner’s licence codes',
            head: ['Learner’s code', 'Vehicles', 'Minimum age'],
            rows: [
              ['Code 1', 'Motorcycle', '16 for up to 125 cc; 18 for over 125 cc'],
              ['Code 2', 'Light motor vehicle up to 3,500 kg gross vehicle mass', '17'],
              ['Code 3', 'Any motor vehicle over 3,500 kg gross vehicle mass', '18'],
            ],
          },
          after: [
            'A learner’s licence is valid for 24 months and cannot be extended. You may only drive under the supervision of a licensed driver.',
          ],
        },
        {
          heading: 'Common driving-licence codes, including Code 8, 10 and 14',
          paragraphs: [
            'South Africa uses letter codes on the licence card. Many people still use the older number names, so both are shown below.',
          ],
          table: {
            caption: 'South African driving licence codes',
            head: ['Code', 'Common name', 'Vehicles', 'Minimum age'],
            rows: [
              ['A1', '—', 'Motorcycle up to 125 cc', '17'],
              ['A', '—', 'Motorcycle over 125 cc', '18'],
              ['B', 'Code 8', 'Motor vehicle, including a minibus, bus or goods vehicle, up to 3,500 kg gross vehicle mass', '18'],
              ['EB', '—', 'Light motor vehicle drawing a trailer, gross combination mass up to 3,500 kg', '18'],
              ['C1', 'Code 10', 'Motor vehicle, bus, minibus or goods vehicle between 3,500 kg and 16,000 kg', '18'],
              ['C', '—', 'Motor vehicle, bus or goods vehicle over 16,000 kg', '18 (Code 3 learner’s minimum)'],
              ['EC1', '—', 'Heavy motor vehicle drawing a trailer, gross combination mass between 3,500 kg and 16,000 kg', '18'],
              ['EC', 'Code 14', 'Articulated heavy vehicle or heavy combination over 16,000 kg', '18'],
            ],
          },
          after: [
            'A licence for a test taken in an automatic vehicle is endorsed for automatic vehicles only. A driving licence card takes about four to six weeks; you get a temporary licence in the meantime.',
          ],
        },
        {
          heading: 'Which code should I train for?',
          bullets: [
            <>For a car or bakkie, train for Code B (Code 8). See <Link href="/code-8-lessons" className={A}>Code 8 lessons</Link> or <Link href="/automatic-driving-lessons-durban" className={A}>automatic lessons</Link>.</>,
            <>For small and medium trucks, train for Code C1 (Code 10). See <Link href="/code-10-lessons" className={A}>Code 10 lessons</Link>.</>,
            <>For articulated trucks and heavy combinations, train for Code EC (Code 14). See <Link href="/code-14-lessons" className={A}>Code 14 lessons</Link>.</>,
            <>For motorcycles, train for Code A1 or A. See <Link href="/motorcycle-lessons" className={A}>motorcycle lessons</Link>.</>,
          ],
        },
        {
          heading: 'Book lessons with Sathuthuka',
          paragraphs: [
            <>Once you have the right learner’s licence, Sathuthuka Driving School can teach you, with pick-up anywhere in Durban and eThekwini. Still need your learner’s? Start with our <Link href="/learners-licence-durban" className={A}>learner’s licence preparation</Link>.</>,
          ],
        },
      ]}
      faqs={FAQS}
      sources={[OFFICIAL.driving, OFFICIAL.learners]}
      reviewed={OFFICIAL_REVIEWED}
      linksHeading="Lessons and guides"
      links={[
        { href: '/code-8-lessons', label: 'Code 8 driving lessons' },
        { href: '/code-10-lessons', label: 'Code 10 truck lessons' },
        { href: '/code-14-lessons', label: 'Code 14 heavy-vehicle lessons' },
        { href: '/motorcycle-lessons', label: 'Motorcycle lessons' },
        { href: '/learners-licence-durban', label: 'Learner’s licence preparation in Durban' },
      ]}
    />
  )
}
