/**
 * lib/locations.ts — the Durban search areas the driving school wants to rank for.
 *
 * Each entry drives one landing page (components/LocationPage.tsx). The school is based in
 * Verulam, north of Durban, and welcomes learners from these areas; copy is written to say
 * exactly that and nothing more (no claims about pick-up points, prices or pass rates).
 */
import type { Metadata } from 'next'
import { SCHOOL_NAME, SCHOOL_PHONE_DISPLAY, SITE_URL } from './school'

export type Location = {
  slug: string
  path: string
  /** Name used in headings, e.g. "Durban North". */
  area: string
  title: string
  description: string
  h1: string
  lead: string
  /** Two or three paragraphs of area-specific copy. */
  body: string[]
  /** Short bullet points shown next to the copy. */
  points: string[]
  /** Link text used from other pages. */
  linkText: string
  linkBlurb: string
}

export const LOCATIONS: Location[] = [
  {
    slug: 'durban',
    path: '/driving-school-durban',
    area: 'Durban',
    title: `Driving School in Durban | ${SCHOOL_NAME}`,
    description: `Looking for a driving school in Durban? ${SCHOOL_NAME} in Verulam teaches Code 8, Code 10 and Code 14 and prepares you for your learner’s licence. Call ${SCHOOL_PHONE_DISPLAY}.`,
    h1: 'Driving School in Durban',
    lead: 'Code 8 lessons, Code 10 and 14 truck training, motorcycle training and learner’s licence preparation for learners across Durban and KwaZulu-Natal.',
    body: [
      'Sathuthuka Driving School has been teaching people across KwaZulu-Natal to drive for a generation. We are based in Verulam, on the northern side of Durban, and we welcome learners from across the city and the surrounding areas.',
      'Durban gives new drivers everything to learn on: busy city streets, suburban roads and freeways. Our approach is simple: we build drivers, not just licence holders, so you learn to handle real traffic safely and arrive where you are going.',
      'Whether you are starting from your very first lesson, preparing for the Code 8 test, training for a Code 10 or Code 14 licence, or studying for your learner’s, message us and we will explain the next step.',
    ],
    points: ['Code 8 driving lessons', 'Code 10 and Code 14 truck training', 'Motorcycle training', 'Learner’s licence preparation with free online practice'],
    linkText: 'Driving school in Durban',
    linkBlurb: 'Lessons and licence training for learners across Durban.',
  },
  {
    slug: 'durban-cbd',
    path: '/driving-school-durban-cbd',
    area: 'Durban CBD',
    title: `Driving School in Durban CBD | ${SCHOOL_NAME}`,
    description: `Learners from Durban CBD can book Code 8 and Code 10/14 driving lessons and learner’s licence preparation with ${SCHOOL_NAME}. WhatsApp or call ${SCHOOL_PHONE_DISPLAY}.`,
    h1: 'Driving School for Durban CBD Learners',
    lead: 'Driving lessons and licence training for people who live or work in the Durban city centre, taught by a school that has been teaching KwaZulu-Natal to drive for a generation.',
    body: [
      'If you live or work in the Durban CBD, learning to drive can feel like a lot: one-way streets, taxi ranks, pedestrians and tight parking. That is exactly why good instruction matters. We teach you to read the road, stay calm in traffic and make safe decisions.',
      'Sathuthuka Driving School is based in Verulam, north of Durban. Learners from the CBD book with us by WhatsApp or phone, and we talk through your licence code, your experience and what suits your schedule.',
      'We teach Code 8 for light vehicles, Code 10 and Code 14 for trucks and heavy vehicles, and motorcycle training. If you still need your learner’s licence, you can practise the K53 test online first.',
    ],
    points: ['Code 8, Code 10 and Code 14 lessons', 'Motorcycle training', 'Book by WhatsApp or phone', 'Free K53 study guide and practice tests online'],
    linkText: 'Driving school in Durban CBD',
    linkBlurb: 'For learners who live or work in the city centre.',
  },
  {
    slug: 'durban-north',
    path: '/driving-school-durban-north',
    area: 'Durban North',
    title: `Driving School in Durban North | ${SCHOOL_NAME}`,
    description: `Driving school near Durban North: ${SCHOOL_NAME} in Verulam teaches Code 8, Code 10 and Code 14 and learner’s licence preparation. WhatsApp or call ${SCHOOL_PHONE_DISPLAY}.`,
    h1: 'Driving School in Durban North',
    lead: 'Code 8 lessons, Code 10 and 14 truck training and learner’s licence preparation for learners from Durban North and the northern suburbs.',
    body: [
      'Learners from Durban North and the northern suburbs book with Sathuthuka Driving School. We are based at the Ayesha Centre in Verulam, on the northern side of Durban, so you are learning with a school that knows the roads north of the city.',
      'We have been teaching people across KwaZulu-Natal to drive for a generation. Our lessons are built around confidence and road safety, from your first time behind the wheel to the day you take your test.',
      'Tell us your licence code and your experience when you message us, and we will recommend where to start. We teach Code 8, Code 10, Code 14 and motorcycle, and we can help you prepare for your learner’s licence.',
    ],
    points: ['Based in Verulam, north of Durban', 'Code 8, Code 10 and Code 14 lessons', 'Motorcycle training', 'Learner’s licence practice tests online'],
    linkText: 'Driving school in Durban North',
    linkBlurb: 'For learners from Durban North and the northern suburbs.',
  },
]

export function getLocation(slug: string): Location {
  const l = LOCATIONS.find(x => x.slug === slug)
  if (!l) throw new Error(`Unknown location: ${slug}`)
  return l
}

/** Pages that use the school's own header instead of the practice-platform navbar. */
export function isSchoolPage(pathname: string | null): boolean {
  return pathname === '/' || LOCATIONS.some(l => l.path === pathname)
}

export function locationMetadata(slug: string): Metadata {
  const l = getLocation(slug)
  return {
    title: { absolute: l.title },
    description: l.description,
    alternates: { canonical: `${SITE_URL}${l.path}` },
    openGraph: {
      title: l.title,
      description: l.description,
      url: `${SITE_URL}${l.path}`,
      type: 'website',
    },
  }
}
