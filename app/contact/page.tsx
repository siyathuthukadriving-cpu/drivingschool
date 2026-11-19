import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import JsonLd from '@/components/JsonLd'
import { FindUs, PageHero } from '@/components/SchoolPageParts'
import { LOCATIONS } from '@/lib/locations'
import { breadcrumbSchema, pageMetadata } from '@/lib/seo'
import { LESSON_PAGES, SCHOOL_EMAIL, SCHOOL_PHONE_DISPLAY, SCHOOL_SCHEMA } from '@/lib/school'

export const metadata = pageMetadata({
  path: '/contact',
  title: 'Contact Sathuthuka Driving School',
  description: `Visit Sathuthuka at Suite 12, Ayesha Centre, Verulam, or call ${SCHOOL_PHONE_DISPLAY}. WhatsApp and email bookings for Durban driving lessons.`,
})

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={[SCHOOL_SCHEMA, breadcrumbSchema([{ name: 'Contact', path: '/contact' }])]} />
      <PageHero
        crumb="Contact"
        h1="Contact Sathuthuka Driving School"
        lead={
          <p>
            The quickest way to book is WhatsApp. You can also call {SCHOOL_PHONE_DISPLAY}, email {SCHOOL_EMAIL} or visit us at the
            Ayesha Centre in Verulam. Ask us about lessons, prices or your learner’s licence practice-test access.
          </p>
        }
      />
      <FindUs
        showMap
        linksHeading="Lessons and areas"
        links={[
          ...LESSON_PAGES,
          ...LOCATIONS.map(l => ({ href: l.path, label: l.linkText })),
          { href: '/learners-licence-durban', label: 'Learner’s licence preparation' },
          { href: '/pricing', label: 'Practice-test access and pricing' },
        ]}
      />
      <FloatingWhatsApp />
    </main>
  )
}
