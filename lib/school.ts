/**
 * lib/school.ts — Thompho’s Driving Academy identity and contact details.
 *
 * Single source of truth for the name, tagline, services, testimonials and
 * "find us" details shown in the header, hero, footer, contact page and
 * structured data. The export names keep the generic SCHOOL_ prefix.
 */

/**
 * Public origin of this site. Set NEXT_PUBLIC_SITE_URL to the academy's own
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

export const SCHOOL_NAME = 'Thompho’s Driving Academy'
export const SCHOOL_SHORT_NAME = 'Thompho’s'
export const SCHOOL_TAGLINE = 'Driving Made Easy'
export const SCHOOL_MOTTO = 'Pretoria’s most trusted driving academy. We build confident, safe, and licensed drivers for life.'
export const SCHOOL_BLURB =
  'Professional, friendly driving lessons in Sunnyside, Pretoria. We help nervous beginners become confident, licensed drivers.'
export const SCHOOL_EXPERIENCE = '116+ licensed drivers'
export const SCHOOL_RATING = '4.8 Google Rating · 116 Reviews'

export const SCHOOL_PHONE_DISPLAY = '012 772 1616'
export const SCHOOL_PHONE_INTL = '+27 12 772 1616'
export const SCHOOL_PHONE_TEL = '+27127721616'
export const SCHOOL_WHATSAPP_NUMBER = '27646814176'
export const SCHOOL_WHATSAPP_DISPLAY = '+27 64 681 4176'
/** No public email address is published; enquiries go through WhatsApp and the phone. */
export const SCHOOL_EMAIL = ''

export const SCHOOL_ADDRESS_LINES = ['81 Celliers St, Sunnyside', 'Pretoria, 0002 · Adverto Tower'] as const
export const SCHOOL_ADDRESS = SCHOOL_ADDRESS_LINES.join(', ')
export const SCHOOL_MAP_URL = 'https://www.google.com/maps/dir/?api=1&destination=81+Celliers+St+Sunnyside+Pretoria+0002'

export const SCHOOL_BOOKING_MESSAGE = 'Hi Thompho\'s Driving Academy, I\'d like to book a driving lesson.'
export const SCHOOL_BOOKING_URL =
  `https://wa.me/${SCHOOL_WHATSAPP_NUMBER}?text=${encodeURIComponent(SCHOOL_BOOKING_MESSAGE)}`
export const SCHOOL_ENQUIRY_URL = `https://wa.me/${SCHOOL_WHATSAPP_NUMBER}`

/** What the academy offers. `practice` links into the online practice platform. */
export const SCHOOL_SERVICES = [
  {
    key: 'beginner',
    title: 'Beginner Driving Lessons',
    desc: 'Start from scratch with patient, step-by-step guidance tailored to your pace.',
    badge: 'Lessons',
  },
  {
    key: 'practice',
    title: 'K53 Test Preparation',
    desc: 'Master the exact requirements to pass your K53 test smoothly.',
    badge: 'K53',
  },
  {
    key: 'confidence',
    title: 'Learner Confidence Building',
    desc: 'Overcome driving anxiety with supportive, encouraging instructors.',
    badge: 'Confidence',
  },
  {
    key: 'refresher',
    title: 'Refresher Lessons',
    desc: 'Brush up your skills if you haven’t driven in a while.',
    badge: 'Refresher',
  },
  {
    key: 'skills',
    title: 'Parking & Road Skills',
    desc: 'Master parallel parking, alley docking, and highway driving.',
    badge: 'Road skills',
  },
  {
    key: 'readiness',
    title: 'Driving Test Readiness',
    desc: 'Mock tests to ensure you are 100% ready for the big day.',
    badge: 'Test day',
  },
] as const

export const SCHOOL_TESTIMONIALS = [
  {
    name: 'Funi Rasikhinya',
    quote: 'I got my drivers license within 2 days. The instructors are amazing and very friendly.',
  },
  {
    name: 'Kootea Mukwevho',
    quote:
      'I had the most amazing experience learning at Thompho’s Driving School! From day one, the professionalism and friendliness were unmatched. My instructors were incredibly patient, explained everything clearly, and made me feel comfortable behind the wheel. Thanks to their guidance, I passed my driving test on my first attempt and feel confident driving on my own. I highly recommend Thompho’s Driving School to anyone looking for the best instructor, the best service, and a truly supportive learning environment.',
  },
  {
    name: 'Karabo Bopape',
    quote: 'My experience with this driving school was excellent from start to finish. The instructors were professional and supportive.',
  },
] as const

export const SCHOOL_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'DrivingSchool',
  name: SCHOOL_NAME,
  description: SCHOOL_BLURB,
  telephone: SCHOOL_PHONE_INTL,
  slogan: SCHOOL_TAGLINE,
  areaServed: 'Pretoria, South Africa',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '81 Celliers St, Sunnyside',
    addressLocality: 'Pretoria',
    postalCode: '0002',
    addressRegion: 'Gauteng',
    addressCountry: 'ZA',
  },
} as const
