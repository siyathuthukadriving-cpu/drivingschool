'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import WhatsAppIcon from './WhatsAppIcon'
import { SCHOOL_BOOKING_URL } from '@/lib/school'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '/practice', label: 'Practice Tests' },
  { href: '#contact', label: 'Contact' },
]

/**
 * Transparent header for the school landing page ("/"), laid over the hero.
 * The practice platform keeps its own navbar on every other page.
 */
export default function SchoolHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="section-container flex h-20 items-center justify-between gap-4 sm:h-24">
        <Link href="/" aria-label="Sathuthuka Driving School — home" className="shrink-0">
          <Logo size="lg" compact />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-4 py-2 text-[15px] font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SCHOOL_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-[15px] font-bold text-white shadow-lg shadow-green-900/30 transition-colors hover:bg-green-600"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={SCHOOL_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book on WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500 text-white"
          >
            <WhatsAppIcon />
          </a>
          <button
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur"
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5 fill-current" aria-hidden="true">
              {open ? (
                <path d="M4.3 4.3a1 1 0 011.4 0L10 8.6l4.3-4.3a1 1 0 111.4 1.4L11.4 10l4.3 4.3a1 1 0 01-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 01-1.4-1.4L8.6 10 4.3 5.7a1 1 0 010-1.4z" />
              ) : (
                <path d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="section-container md:hidden">
          <nav className="rounded-2xl bg-brand-900/95 p-2 shadow-xl backdrop-blur" aria-label="Mobile">
            {LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3.5 text-base font-semibold text-white/90 hover:bg-white/10"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
