import Link from 'next/link'
import InfoPage from '@/components/InfoPage'
import { pageMetadata, type Faq } from '@/lib/seo'
import { SCHOOL_PHONE_DISPLAY } from '@/lib/school'

const PATH = '/defensive-driving-durban'

export const metadata = pageMetadata({
  path: PATH,
  title: 'Defensive Driving Lessons in Durban | Sathuthuka',
  description: `Defensive driving lessons for licensed drivers in Durban and eThekwini: hazard awareness, following distance and calm decisions in traffic. Call ${SCHOOL_PHONE_DISPLAY}.`,
})

const FAQS: Faq[] = [
  {
    q: 'Do I need a driving licence for defensive driving lessons?',
    a: 'Defensive driving lessons are for people who can already drive. If you are still learning, start with our Code 8 lessons, which build the same habits from the first lesson.',
  },
  {
    q: 'Can you pick me up?',
    a: 'Yes. We offer pick-up for lessons anywhere in Durban and eThekwini.',
  },
  {
    q: 'Can I practise in my own car?',
    a: `Ask us when you book on ${SCHOOL_PHONE_DISPLAY}, and tell us what you drive and what you want to work on.`,
  },
  {
    q: 'What does defensive driving cost?',
    a: `Message us on WhatsApp or call ${SCHOOL_PHONE_DISPLAY} for current prices.`,
  },
]

export default function Page() {
  return (
    <InfoPage
      path={PATH}
      crumb="Defensive driving"
      h1="Defensive Driving Lessons in Durban"
      lead={<p>For licensed drivers who want to spot hazards earlier, keep more space and stay calm in Durban traffic, from a school that has taught KwaZulu-Natal to drive for over 30 years.</p>}
      service={{ name: 'Defensive driving', description: 'Defensive driving lessons for licensed drivers in Durban and eThekwini.' }}
      sections={[
        {
          heading: 'What defensive driving means',
          paragraphs: [
            'Passing your test proves you know the rules. Defensive driving is about what happens when other road users do not follow them. It means looking further ahead, expecting mistakes from others, keeping an escape route open and making decisions early instead of reacting late.',
          ],
        },
        {
          heading: 'Who it is for',
          bullets: [
            'New licence holders who feel nervous on freeways or in heavy traffic.',
            'Drivers coming back to the road after a long break.',
            'People who drive a lot for work and want to reduce their risk.',
            'Parents who want to sharpen their own habits before they supervise a learner.',
          ],
        },
        {
          heading: 'What we work on in Durban traffic',
          bullets: [
            'Minibus taxis that stop or pull out with little warning, and how to position yourself around them.',
            'Merging and changing lanes safely on busy freeways and on-ramps.',
            'Leaving a bigger following gap in Durban’s summer downpours, when roads are slippery and visibility drops.',
            'Pedestrians crossing away from crossings in the city centre and near taxi ranks.',
            'Scanning mirrors and blind spots, and planning ahead at busy intersections and traffic circles.',
          ],
        },
        {
          heading: 'How sessions work',
          paragraphs: [
            'We pick you up, find out what worries you most and plan the drive around it. Sessions take place on real roads, so the skills carry straight over to the trips you make every day.',
            <>If you are still working towards your licence, our <Link href="/code-8-lessons" className="font-semibold text-brand-700 hover:underline">Code 8 lessons</Link> teach the same defensive habits from the start.</>,
          ],
        },
      ]}
      faqs={FAQS}
      linksHeading="Related pages"
      links={[
        { href: '/code-8-lessons', label: 'Code 8 driving lessons' },
        { href: '/automatic-driving-lessons-durban', label: 'Automatic driving lessons in Durban' },
        { href: '/driving-school-durban', label: 'Driving school in Durban' },
        { href: '/driving-school-durban-north', label: 'Driving school in Durban North' },
        { href: '/contact', label: 'Contact the school' },
      ]}
    />
  )
}
