/**
 * lib/school.ts — Sathuthuka Driving School identity and contact details.
 *
 * Single source of truth for the name, tagline and "find us" details shown in
 * the navbar, hero, footer, contact page and structured data.
 */
/**
 * Public origin of this site. Set NEXT_PUBLIC_SITE_URL to the school's own
 * domain once it is live; until then fall back to the Vercel production URL
 * (or localhost in dev) so no other business's domain is ever referenced.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.NEXT_PUBLIC_BASE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, '')

export const SCHOOL_NAME = 'Sathuthuka Driving School'
export const SCHOOL_SHORT_NAME = 'Sathuthuka'
export const SCHOOL_TAGLINE = 'Learn to Drive. Learn to Arrive.'
export const SCHOOL_MOTTO = 'We build drivers, not just licence holders.'
export const SCHOOL_BLURB =
  'Teaching people across KwaZulu-Natal to drive for a generation. Code 8 lessons, Code 10 truck training, and learner’s licence preparation.'
export const SCHOOL_EXPERIENCE = 'Over 30 years'

export const SCHOOL_PHONE_DISPLAY = '076 754 5780'
export const SCHOOL_PHONE_INTL = '+27 76 754 5780'
export const SCHOOL_PHONE_TEL = '+27767545780'
export const SCHOOL_WHATSAPP_NUMBER = '27767545780'
export const SCHOOL_EMAIL = 'Sathuthuka@gmail.com'

export const SCHOOL_ADDRESS_LINES = [
  'Suite 12, Ayesha Centre',
  'George Sewpersard Street',
  'Verulam, KwaZulu-Natal, South Africa',
] as const
export const SCHOOL_ADDRESS = SCHOOL_ADDRESS_LINES.join(', ')
export const SCHOOL_MAP_URL =
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Ayesha Centre, George Sewpersard Street, Verulam, South Africa')}`

export const SCHOOL_BOOKING_MESSAGE = 'Hi Sathuthuka Driving School, I would like to book driving lessons.'
export const SCHOOL_BOOKING_URL =
  `https://wa.me/${SCHOOL_WHATSAPP_NUMBER}?text=${encodeURIComponent(SCHOOL_BOOKING_MESSAGE)}`
export const SCHOOL_ENQUIRY_URL = `https://wa.me/${SCHOOL_WHATSAPP_NUMBER}`

/** What the school teaches — mirrors the banner: Learner's, Code 8, Code 10/14, Motorcycle. */
export const SCHOOL_SERVICES = [
  {
    key: 'code8',
    title: 'Code 8 Lessons',
    desc: 'Driving lessons for your light motor vehicle licence, from your first lesson to your test.',
    badge: 'Light vehicle',
  },
  {
    key: 'code10',
    title: 'Code 10 & 14 Truck Training',
    desc: 'Truck and heavy-vehicle training for your Code 10 and Code 14 licence.',
    badge: 'Heavy vehicle',
  },
  {
    key: 'learners',
    title: 'Learner’s Licence Prep',
    desc: 'Exam-style K53 practice tests, a study guide and live notes to prepare for your learner’s licence test.',
    badge: 'K53 theory',
  },
  {
    key: 'motorcycle',
    title: 'Motorcycle Training',
    desc: 'Training for your motorcycle licence.',
    badge: 'Motorcycle',
  },
] as const

export const SCHOOL_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'DrivingSchool',
  name: SCHOOL_NAME,
  description: SCHOOL_BLURB,
  telephone: SCHOOL_PHONE_INTL,
  email: SCHOOL_EMAIL,
  slogan: SCHOOL_TAGLINE,
  areaServed: 'KwaZulu-Natal, South Africa',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Suite 12, Ayesha Centre, George Sewpersard Street',
    addressLocality: 'Verulam',
    addressRegion: 'KwaZulu-Natal',
    addressCountry: 'ZA',
  },
} as const
