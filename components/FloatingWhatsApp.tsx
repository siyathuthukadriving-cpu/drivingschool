import WhatsAppIcon from './WhatsAppIcon'
import { SCHOOL_BOOKING_URL } from '@/lib/school'

/** Round WhatsApp button pinned to the corner of the school landing page. */
export default function FloatingWhatsApp() {
  return (
    <a
      href={SCHOOL_BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a lesson on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-black/30 transition-transform hover:scale-105 hover:bg-green-600 active:scale-95"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
