import Link from 'next/link'
import InfoPage from '@/components/InfoPage'
import { OFFICIAL, OFFICIAL_REVIEWED } from '@/lib/official'
import { pageMetadata, type Faq } from '@/lib/seo'
import { SCHOOL_PHONE_DISPLAY } from '@/lib/school'

const PATH = '/automatic-driving-lessons-durban'

export const metadata = pageMetadata({
  path: PATH,
  title: 'Automatic Driving Lessons in Durban | Sathuthuka',
  description: `Automatic Code 8 driving lessons across Durban and eThekwini, with pick-up. Learn what an automatic-only licence means before you book. Call ${SCHOOL_PHONE_DISPLAY}.`,
})

const FAQS: Faq[] = [
  {
    q: 'If I pass in an automatic, can I drive a manual car?',
    a: 'No. Under the National Road Traffic Act, a driving licence for a test taken in a vehicle with an automatic transmission is endorsed so that it only authorises automatic vehicles. To drive a manual vehicle you would need to pass the test again in a manual.',
  },
  {
    q: 'Is the learner’s test different for automatic drivers?',
    a: 'No. The K53 learner’s test is the same. The vehicle controls section can ask about the clutch, so learn what every control does even if your car will not have one.',
  },
  {
    q: 'Can you pick me up for automatic lessons?',
    a: 'Yes. We offer pick-up for lessons anywhere in Durban and eThekwini.',
  },
  {
    q: 'What do automatic lessons cost?',
    a: `Message us on WhatsApp or call ${SCHOOL_PHONE_DISPLAY} for current lesson prices.`,
  },
]

export default function Page() {
  return (
    <InfoPage
      path={PATH}
      crumb="Automatic lessons"
      h1="Automatic Driving Lessons in Durban"
      lead={<p>Learn to drive in an automatic car with Sathuthuka Driving School. Code 8 lessons with pick-up anywhere in Durban and eThekwini, from a school with over 30 years of experience.</p>}
      service={{ name: 'Automatic driving lessons', description: 'Code 8 (Code B) driving lessons in an automatic car in Durban and eThekwini.' }}
      sections={[
        {
          heading: 'Why learners choose automatic',
          paragraphs: [
            'Without a clutch to manage, you can give more of your attention to the road: mirrors, other drivers, pedestrians and the taxi that has just stopped ahead. Many learners find this helps on Durban’s hills and in stop-start traffic on routes such as the N2 and the M4 at peak times.',
            'Automatic lessons can also suit people who own, or will be given, an automatic car and do not expect to drive a manual vehicle.',
          ],
        },
        {
          heading: 'Know the automatic-only restriction first',
          paragraphs: [
            'This is the most important decision to make before you book. Section 18(4)(a) of the National Road Traffic Act says that if you take your driving test in a vehicle with an automatic transmission, your licence is endorsed to allow automatic vehicles only.',
            'If you may need to drive a manual vehicle later, for example a manual bakkie or a work vehicle, a manual licence keeps that option open. If you are unsure, tell us about your plans when you message us and we will help you decide.',
          ],
        },
        {
          heading: 'How automatic lessons work',
          paragraphs: [
            'We pick you up and start with the basics of an automatic: the gear selector positions, using the brake to hold the car, smooth acceleration and controlled stopping. From there, lessons cover the same K53 observation, junction, parking and manoeuvre skills as any Code 8 learner.',
            <>You need a valid Code 2 learner’s licence before you start. If you do not have one yet, begin with our <Link href="/learners-licence-durban" className="font-semibold text-brand-700 hover:underline">learner’s licence preparation</Link>.</>,
          ],
        },
        {
          heading: 'Manual or automatic: we teach both',
          paragraphs: [
            <>If you decide a manual licence suits you better, our <Link href="/code-8-lessons" className="font-semibold text-brand-700 hover:underline">Code 8 lessons</Link> cover manual cars too. Either way, booking is the same: WhatsApp or call {SCHOOL_PHONE_DISPLAY}.</>,
          ],
        },
      ]}
      faqs={FAQS}
      sources={[OFFICIAL.driving]}
      reviewed={OFFICIAL_REVIEWED}
      linksHeading="Related pages"
      links={[
        { href: '/code-8-lessons', label: 'Code 8 driving lessons (manual and automatic)' },
        { href: '/defensive-driving-durban', label: 'Defensive driving in Durban' },
        { href: '/learners-licence-durban', label: 'Learner’s licence preparation in Durban' },
        { href: '/driving-school-durban', label: 'Driving school in Durban' },
        { href: '/driving-school-durban-cbd', label: 'Driving school for Durban CBD learners' },
        { href: '/contact', label: 'Contact the school' },
      ]}
    />
  )
}
