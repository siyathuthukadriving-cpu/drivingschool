import Link from 'next/link'
import InfoPage from '@/components/InfoPage'
import { pageMetadata } from '@/lib/seo'
import { LOCATIONS } from '@/lib/locations'
import { LESSON_PAGES, SCHOOL_MOTTO, SCHOOL_NAME, SCHOOL_PHONE_DISPLAY } from '@/lib/school'

const A = 'font-semibold text-brand-700 hover:underline'

export const metadata = pageMetadata({
  path: '/about',
  title: 'About Sathuthuka Driving School in Verulam',
  description: 'Sathuthuka Driving School in Verulam has taught people across KwaZulu-Natal to drive for over 30 years. Code 8, 10 and 14 lessons and K53 learner’s prep.',
})

export default function AboutPage() {
  return (
    <InfoPage
      path="/about"
      crumb="About"
      h1="About Sathuthuka Driving School"
      lead={<p>A Verulam driving school that has been teaching people across KwaZulu-Natal to drive for over 30 years, with pick-up for lessons anywhere in Durban and eThekwini.</p>}
      sections={[
        {
          heading: 'Who we are',
          paragraphs: [
            `${SCHOOL_NAME} is based at Suite 12, Ayesha Centre, on George Sewpersadh Street in Verulam, north of Durban. We have been teaching people to drive for more than 30 years, and today we teach learners from Verulam, the Durban CBD, Durban North and the rest of Durban and eThekwini.`,
            `Our motto sums up how we teach: “${SCHOOL_MOTTO}” Passing the test matters, but the goal is a driver who stays safe on the road for years afterwards.`,
          ],
        },
        {
          heading: 'What we teach',
          bullets: [
            <>Code 8 lessons in <Link href="/code-8-lessons" className={A}>manual</Link> and <Link href="/automatic-driving-lessons-durban" className={A}>automatic</Link> cars.</>,
            <><Link href="/code-10-lessons" className={A}>Code 10</Link> and <Link href="/code-14-lessons" className={A}>Code 14</Link> truck and heavy-vehicle training.</>,
            <><Link href="/motorcycle-lessons" className={A}>Motorcycle</Link> licence training.</>,
            <><Link href="/defensive-driving-durban" className={A}>Defensive driving</Link> for people who already have a licence.</>,
            <>Online <Link href="/learners-licence-durban" className={A}>K53 learner’s licence preparation</Link>: a free study guide and practice tests.</>,
          ],
        },
        {
          heading: 'How we work',
          paragraphs: [
            'We pick learners up for lessons anywhere in Durban and eThekwini, so you do not have to travel to Verulam for every lesson. We are open Monday to Saturday, 08:00–17:00.',
            `To book, message us on WhatsApp or call ${SCHOOL_PHONE_DISPLAY}. Tell us which licence you are working towards and where you would like to be picked up, and we will take it from there.`,
          ],
        },
      ]}
      faqs={[]}
      linksHeading="Lessons and areas"
      links={[
        ...LESSON_PAGES,
        ...LOCATIONS.map(l => ({ href: l.path, label: l.linkText })),
        { href: '/contact', label: 'Contact the school' },
      ]}
    />
  )
}
