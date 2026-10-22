/**
 * Footer — Thompho’s Driving Academy details, quick links, contact details and the practice
 * platform / legal links, plus a discreet admin link in the legal column.
 */
import Link from 'next/link'
import { ACCESS_PRICE, ACCESS_DURATION_DAYS } from '@/lib/contact'
import { SCHOOL_BOOKING_URL, SCHOOL_MOTTO, SCHOOL_NAME } from '@/lib/school'
import ContactDetails from './ContactDetails'
import Logo from './Logo'

const linkClass = 'text-gray-400 hover:text-white transition-colors'

export default function Footer() {
  return (
    <footer className="bg-brand-900 border-t-4 border-accent-500 text-gray-300">
      <div className="section-container py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <Logo size="lg" />
            <p className="mt-5 max-w-sm text-sm text-gray-400">{SCHOOL_MOTTO}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={SCHOOL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-600"
              >
                Book on WhatsApp
              </a>
              <Link
                href="/practice"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Practice tests · {ACCESS_PRICE}
              </Link>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Full access to the online K53 practice tests is {ACCESS_PRICE} for {ACCESS_DURATION_DAYS} days.
            </p>
          </div>

          <div className="lg:col-span-4">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">Contact</h4>
            <ContactDetails tone="dark" />
          </div>

          <div className="lg:col-span-4 grid grid-cols-3 gap-6">
            <div>
              <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#about" className={linkClass}>About</Link></li>
                <li><Link href="/#services" className={linkClass}>Services</Link></li>
                <li><Link href="/#reviews" className={linkClass}>Reviews</Link></li>
                <li><Link href="/#contact" className={linkClass}>Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-white">Practice</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/courses" className={linkClass}>Practice Tests</Link></li>
                <li><Link href="/k53-learners-study-guide" className={linkClass}>Study Guide</Link></li>
                <li><Link href="/live-notes" className={linkClass}>Live Notes</Link></li>
                <li><Link href="/videos" className={linkClass}>Videos</Link></li>
                <li><Link href="/affiliate" className={linkClass}>Affiliates</Link></li>
                <li><Link href="/trainer" className={linkClass}>Trainers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-white">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className={linkClass}>Privacy</Link></li>
                <li><Link href="/terms-and-conditions" className={linkClass}>Terms</Link></li>
                <li><Link href="/cookie-policy" className={linkClass}>Cookies</Link></li>
                <li><Link href="/admin" className={linkClass}>Admin</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} {SCHOOL_NAME}. All rights reserved.</p>
          <p className="text-xs text-gray-500">Built with care for everyday South Africans.</p>
        </div>
      </div>
    </footer>
  )
}
