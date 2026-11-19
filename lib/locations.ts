/**
 * lib/locations.ts — the confirmed areas the driving school wants to rank for.
 *
 * Each entry drives one landing page (components/LocationPage.tsx). The school is based in
 * Verulam, teaches across Durban and eThekwini and offers pick-up for lessons. Each page has its
 * own copy; do not add thin per-suburb pages. Prices and pass rates stay off until confirmed.
 */
import type { Metadata } from 'next'
import { pageMetadata, type Faq } from './seo'
import { SCHOOL_ADDRESS, SCHOOL_HOURS, SCHOOL_PHONE_DISPLAY } from './school'

export type Location = {
  slug: string
  path: string
  /** Name used in headings, e.g. "Durban North". */
  area: string
  title: string
  description: string
  h1: string
  lead: string
  /** H2 above the main area copy. */
  introHeading: string
  /** Two or three paragraphs of area-specific copy. */
  body: string[]
  /** Extra area-specific sections shown after the main copy. */
  sections: { heading: string; paragraphs: string[] }[]
  servicesHeading: string
  bookHeading: string
  faqHeading: string
  faqs: Faq[]
  /** Link text used from other pages. */
  linkText: string
  linkBlurb: string
}

const PRICE_ANSWER = `We share current lesson prices directly, because they depend on the licence code and how many lessons you need. Message us on WhatsApp or call ${SCHOOL_PHONE_DISPLAY} for current lesson prices.`
const BOOK_ANSWER = `WhatsApp or call ${SCHOOL_PHONE_DISPLAY} (${SCHOOL_HOURS.display}). Tell us which licence you are training for, where you would like to be picked up, how much driving you have done and when you are free, and we will confirm your lessons with you.`
const PICKUP_ANSWER = 'Yes. We offer pick-up for lessons anywhere in Durban and eThekwini. Tell us your address or a convenient meeting place when you book.'

export const LOCATIONS: Location[] = [
  {
    slug: 'verulam',
    path: '/driving-school-verulam',
    area: 'Verulam',
    title: 'Driving School in Verulam | Sathuthuka',
    description: `Sathuthuka Driving School is based at Ayesha Centre in Verulam: Code 8, Code 10, Code 14 and motorcycle lessons, plus K53 prep. Call ${SCHOOL_PHONE_DISPLAY}.`,
    h1: 'Driving School in Verulam',
    lead: 'Our home base for over 30 years of teaching: Suite 12, Ayesha Centre, Verulam. Manual and automatic Code 8, Code 10, Code 14, motorcycle and defensive driving lessons, with pick-up in Verulam and across eThekwini.',
    introHeading: 'Find us at Ayesha Centre',
    body: [
      'Sathuthuka Driving School works from Suite 12 in the Ayesha Centre on George Sewpersadh Street, Verulam. This is where the school is based, and it is the address to use when you look us up on a map or visit to ask about lessons.',
      `The office is open ${SCHOOL_HOURS.display}. You are welcome to come in to ask about lessons, but you do not have to travel to us to learn: we offer pick-up for lessons in Verulam and across the rest of eThekwini.`,
    ],
    sections: [
      {
        heading: 'Learners from Durban and Durban North',
        paragraphs: [
          'Verulam is our base, not the edge of our area. We teach learners from all over Durban and eThekwini, including the city centre and Durban North, and we can pick you up for lessons. Local learners in Verulam, Mount Moriah, Canelands and nearby can book in the same way.',
        ],
      },
    ],
    servicesHeading: 'What we teach in Verulam',
    bookHeading: 'How to book',
    faqHeading: 'Questions',
    faqs: [
      {
        q: 'What is the exact address?',
        a: `${SCHOOL_ADDRESS}. Suite 12 is inside the Ayesha Centre. We are open ${SCHOOL_HOURS.display}.`,
      },
      { q: 'Do you pick learners up in Verulam?', a: PICKUP_ANSWER },
      {
        q: 'Can I start lessons without a learner’s licence?',
        a: 'In South Africa you need a valid learner’s licence before you may drive on a public road, and you must be supervised by a licensed driver. You can start studying for the K53 learner’s test with our free online guide and practice tests now, then book driving lessons once you have your learner’s.',
      },
      {
        q: 'Which licences can I train for in Verulam?',
        a: 'Code 8 for light vehicles in a manual or automatic car, Code 10 and Code 14 for trucks and heavy vehicles, motorcycle training, and defensive driving for licensed drivers. We also help you prepare for the K53 learner’s test online.',
      },
      { q: 'How do I book?', a: BOOK_ANSWER },
    ],
    linkText: 'Driving school in Verulam',
    linkBlurb: 'Our base at the Ayesha Centre, Verulam.',
  },
  {
    slug: 'durban',
    path: '/driving-school-durban',
    area: 'Durban',
    title: 'Driving School in Durban | Sathuthuka',
    description: `Book Code 8, Code 10 and Code 14 driving lessons in Durban with Sathuthuka in Verulam. K53 learner’s prep online. WhatsApp or call ${SCHOOL_PHONE_DISPLAY}.`,
    h1: 'Driving School in Durban',
    lead: 'Manual and automatic Code 8 lessons, Code 10 and 14 truck training, motorcycle and defensive driving, with pick-up anywhere in Durban and eThekwini.',
    introHeading: 'Lessons for Durban learners',
    body: [
      'Sathuthuka Driving School has been teaching people across KwaZulu-Natal to drive for over 30 years. Our office is in Verulam, but our lessons cover the whole of Durban and eThekwini, and we offer pick-up so you can start your lesson from home, work or campus.',
      'Durban gives new drivers everything to learn on: busy city streets, suburban roads and freeways. Our approach is simple: we build drivers, not just licence holders, so you learn to handle real traffic safely and arrive where you are going.',
      'Whether you live in Umlazi, Chatsworth, Pinetown, Phoenix, KwaMashu, Umhlanga or the Bluff, the booking is the same: message us, tell us your licence code and where to collect you, and we will explain the next step.',
    ],
    sections: [
      {
        heading: 'Pick-up across Durban, or visit us in Verulam',
        paragraphs: [
          'Most Durban learners never need to travel to the office: we offer pick-up for lessons anywhere in Durban and eThekwini. Agree the pick-up point with us when you book.',
          `If you would rather talk to us in person, the office is at ${SCHOOL_ADDRESS}, open ${SCHOOL_HOURS.display}. Use the Google Maps link below for directions.`,
        ],
      },
    ],
    servicesHeading: 'What we teach',
    bookHeading: 'How to book',
    faqHeading: 'Driving school questions',
    faqs: [
      { q: 'Where is the school?', a: `We are at ${SCHOOL_ADDRESS}, on the northern side of Durban.` },
      {
        q: 'Do you only teach learners who live in Verulam?',
        a: 'No. The office is in Verulam, but we teach across the whole of Durban and eThekwini.',
      },
      { q: 'Do you offer pick-up in Durban?', a: PICKUP_ANSWER },
      {
        q: 'Can I learn in an automatic car?',
        a: 'Yes. We offer Code 8 lessons in both manual and automatic cars. Tell us which you want when you book.',
      },
      { q: 'How do I book?', a: BOOK_ANSWER },
      { q: 'What does a driving lesson cost?', a: PRICE_ANSWER },
    ],
    linkText: 'Driving school in Durban',
    linkBlurb: 'Lessons and licence training for learners across Durban.',
  },
  {
    slug: 'durban-cbd',
    path: '/driving-school-durban-cbd',
    area: 'Durban CBD',
    title: 'Driving School in Durban CBD | Sathuthuka',
    description: `Driving lessons for people who live or work in Durban CBD: Code 8, Code 10, Code 14 and learner’s licence prep. Call ${SCHOOL_PHONE_DISPLAY}.`,
    h1: 'Driving School for Durban CBD Learners',
    lead: 'Driving lessons for people who live or work in the Durban city centre, with pick-up from your flat, office or campus, from a school with over 30 years of teaching KwaZulu-Natal to drive.',
    introHeading: 'If you live or work in the city centre',
    body: [
      'Learning to drive when your days are spent in the Durban CBD means preparing for one-way streets, taxi ranks, crowded pedestrian crossings and tight parking. That is exactly why good instruction matters. We teach you to read the road, stay calm in traffic and make safe decisions.',
      'Sathuthuka Driving School is based in Verulam, but you do not need to travel there. We offer pick-up in the CBD, so a lesson can start outside your building in the city centre or on the Berea. Book by WhatsApp or phone and we will talk through your licence code, your experience and what suits your schedule.',
      'Many city learners choose automatic lessons for stop-start traffic, while others want a manual licence; we teach both. We also teach Code 10 and Code 14 for trucks and heavy vehicles, motorcycle training, and defensive driving for drivers who already have a licence. If you still need your learner’s, you can practise the K53 test online first.',
    ],
    sections: [
      {
        heading: 'Fitting lessons around a city working day',
        paragraphs: [
          `We are open ${SCHOOL_HOURS.display}, so Saturday lessons are an option if weekdays are taken up by work or lectures. Tell us when you are free and where you want to be collected.`,
        ],
      },
    ],
    servicesHeading: 'What we teach',
    bookHeading: 'How booking works',
    faqHeading: 'Questions',
    faqs: [
      { q: 'Where is the school?', a: `Our office is at ${SCHOOL_ADDRESS}, north of the city centre. You do not need to come there for lessons, because we offer pick-up in the CBD.` },
      {
        q: 'Can you pick me up in the Durban CBD?',
        a: PICKUP_ANSWER,
      },
      {
        q: 'Do you teach on Saturdays?',
        a: `Yes. We are open ${SCHOOL_HOURS.display}.`,
      },
      {
        q: 'I still need my learner’s licence. Where do I start?',
        a: 'Start with the free K53 study guide and practice tests on this site. Once you know the work, book your learner’s test at a testing centre (DLTC); our booking guide explains the documents to take.',
      },
      { q: 'How do I book a driving lesson?', a: BOOK_ANSWER },
    ],
    linkText: 'Driving school in Durban CBD',
    linkBlurb: 'For learners who live or work in the city centre.',
  },
  {
    slug: 'durban-north',
    path: '/driving-school-durban-north',
    area: 'Durban North',
    title: 'Driving School in Durban North | Sathuthuka',
    description: `Sathuthuka in Verulam teaches Code 8, 10 and 14 lessons to learners from Durban North and the northern suburbs. Call ${SCHOOL_PHONE_DISPLAY}.`,
    h1: 'Driving School in Durban North',
    lead: 'Manual and automatic Code 8 lessons, Code 10 and 14 truck training and defensive driving for Durban North and the northern suburbs, with pick-up from your door.',
    introHeading: 'Lessons for Durban North and the northern suburbs',
    body: [
      'Learners from Durban North, Umhlanga, La Lucia, Glenashley and the other northern suburbs book with Sathuthuka Driving School. We have been teaching people across KwaZulu-Natal to drive for over 30 years, and our lessons are built around confidence and road safety, from your first time behind the wheel to the day you take your test.',
      'We offer pick-up, so your lesson can start at home, at school or at work in the north of the city.',
      'Tell us your licence code and your experience when you message us, and we will recommend where to start.',
    ],
    sections: [
      {
        heading: 'Based in Verulam',
        paragraphs: [
          'Our office is at the Ayesha Centre in Verulam, further up the north side of eThekwini from Durban North. We know the roads north of the city well, and the office is where you can find us in person.',
        ],
      },
    ],
    servicesHeading: 'What we teach',
    bookHeading: 'How to book',
    faqHeading: 'Questions',
    faqs: [
      { q: 'Where is the school?', a: `Our office is at ${SCHOOL_ADDRESS}, north of Durban North.` },
      {
        q: 'Do you teach learners from Durban North?',
        a: 'Yes. We teach learners from Durban North and the northern suburbs and offer pick-up there, as we do across Durban and eThekwini.',
      },
      {
        q: 'Which licences can I train for?',
        a: 'Code 8 (light vehicles, manual or automatic), Code 10 and Code 14 (trucks and heavy vehicles), motorcycle and defensive driving. We also help you prepare for your learner’s licence online.',
      },
      { q: 'How do I book?', a: BOOK_ANSWER },
    ],
    linkText: 'Driving school in Durban North',
    linkBlurb: 'For learners from Durban North and the northern suburbs.',
  },
]

export function getLocation(slug: string): Location {
  const l = LOCATIONS.find(x => x.slug === slug)
  if (!l) throw new Error(`Unknown location: ${slug}`)
  return l
}

/** School, lesson and guide pages that are not location pages but use the school's own header. */
export const SCHOOL_PATHS = [
  '/',
  '/code-8-lessons',
  '/automatic-driving-lessons-durban',
  '/defensive-driving-durban',
  '/code-10-lessons',
  '/code-14-lessons',
  '/motorcycle-lessons',
  '/learners-licence-durban',
  '/how-to-book-learners-licence-durban',
  '/learners-licence-cost',
  '/licence-codes',
  '/about',
  '/contact',
] as const

/** Pages that use the school's own header instead of the practice-platform navbar. */
export function isSchoolPage(pathname: string | null): boolean {
  if (!pathname) return false
  return (SCHOOL_PATHS as readonly string[]).includes(pathname) || LOCATIONS.some(l => l.path === pathname)
}

export function locationMetadata(slug: string): Metadata {
  const l = getLocation(slug)
  return pageMetadata({ path: l.path, title: l.title, description: l.description })
}
