import type { Metadata } from 'next'
import ContactDetails from '@/components/ContactDetails'
import {
  SCHOOL_BOOKING_URL,
  SCHOOL_MAP_URL,
  SCHOOL_MOTTO,
  SCHOOL_NAME,
  SCHOOL_PHONE_DISPLAY,
  SCHOOL_PHONE_TEL,
  SCHOOL_SCHEMA,
  SCHOOL_TAGLINE,
} from '@/lib/school'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact ${SCHOOL_NAME} in Verulam, KwaZulu-Natal: call ${SCHOOL_PHONE_DISPLAY}, WhatsApp, email or visit us at Ayesha Centre.`,
}

export default function ContactPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHOOL_SCHEMA) }} />

      <section className="bg-brand-900 text-white border-b-4 border-brand-600">
        <div className="section-container py-12 sm:py-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-300">{SCHOOL_TAGLINE}</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold">Contact {SCHOOL_NAME}</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            {SCHOOL_MOTTO} Questions about lessons, Code 8 or Code 10/14 training, or your learner’s licence practice tests? Get in touch.
          </p>
        </div>
      </section>

      <section className="section-container py-12 sm:py-16 grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="card-elevated p-7 sm:p-9">
          <h2 className="text-xl font-extrabold text-gray-900 mb-6">Find us</h2>
          <ContactDetails />
        </div>

        <div className="card-elevated p-7 sm:p-9 flex flex-col">
          <h2 className="text-xl font-extrabold text-gray-900">Book a lesson</h2>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            The fastest way to reach us is WhatsApp. Message us to book driving lessons, ask about Code 8, Code 10/14 or
            motorcycle training, or get help with your learner’s licence practice-test access and payments.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={SCHOOL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-700 active:scale-[0.98]"
            >
              Message us on WhatsApp
            </a>
            <a
              href={`tel:${SCHOOL_PHONE_TEL}`}
              className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 px-7 py-3.5 text-sm font-bold text-gray-800 transition-colors hover:border-brand-600 hover:text-brand-700 active:scale-[0.98]"
            >
              Call {SCHOOL_PHONE_DISPLAY}
            </a>
          </div>
          <a
            href={SCHOOL_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-sm font-semibold text-brand-700 hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>
      </section>
    </main>
  )
}
