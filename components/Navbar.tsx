'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { createClient } from '@/lib/supabase-browser'
import { ACCESS_PRICE } from '@/lib/contact'
import { SCHOOL_PHONE_DISPLAY, SCHOOL_PHONE_TEL } from '@/lib/school'
import Logo from '@/components/Logo'
import { isAdminEmail } from '@/lib/admin-emails'
import type { User } from '@supabase/supabase-js'

const LINKS = [
  { href: '/',                          label: 'Home' },
  { href: '/practice',                  label: 'Practice Home' },
  { href: '/k53-learners-study-guide',  label: 'Study Guide' },
  { href: '/courses',                   label: 'Practice Tests' },
  { href: '/centers',                   label: 'Find a Centre' },
  { href: '/live-notes',                label: 'Live Notes' },
  { href: '/videos',                    label: 'Videos' },
  { href: '/contact',                   label: 'Contact' },
]

export default function Navbar() {
  const supabase = useMemo(() => createClient(), [])
  const router   = useRouter()
  const pathname = usePathname()

  const [user, setUser] = useState<User | null>(null)
  const [open, setOpen] = useState(false)
  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user))
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, s) => {
      setUser(s?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [supabase])

  const isAdmin = isAdminEmail(user?.email)
  const navLinks = user ? [...LINKS, { href: '/account', label: 'My Progress' }] : LINKS

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href === '/live-notes') return pathname.startsWith('/live-notes') && !pathname.startsWith('/live-notes/rules')
    return pathname === href || pathname.startsWith(href)
  }

  const logout = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  // the school landing page ("/") has its own header over the hero
  if (pathname === '/') return null

  return (
    <nav className="bg-brand-900 text-white shadow-nav sticky top-0 z-50 backdrop-blur-sm bg-opacity-[0.97] border-b-2 border-brand-600">
      <div className="section-container h-[4.25rem] flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" aria-label="Sathuthuka Driving School — home" className="shrink-0 hover:opacity-90 transition-opacity">
          <Logo compact />
        </Link>

        {/* Desktop nav links (the logo already leads home) */}
        <div className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
          {navLinks.filter(l => l.href !== '/').map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative whitespace-nowrap px-2.5 py-2 rounded-lg text-[13px] font-semibold tracking-wide transition-all duration-200 ${
                isActive(l.href)
                  ? 'bg-white/15 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {l.label}
              {isActive(l.href) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent-400 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${SCHOOL_PHONE_TEL}`}
            aria-label={`Call ${SCHOOL_PHONE_DISPLAY}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-xs font-bold text-white hover:bg-white/10 transition-colors"
          >
            <svg viewBox="0 0 20 20" className="w-4 h-4 fill-brand-500" aria-hidden="true"><path d="M2 3a1 1 0 011-1h2.15a1 1 0 01.99.84l.5 3a1 1 0 01-.55 1.05l-1.3.65a11.04 11.04 0 005.02 5.02l.65-1.3a1 1 0 011.05-.55l3 .5a1 1 0 01.84.99V17a1 1 0 01-1 1h-1C7.82 18 2 12.18 2 5V3z" /></svg>
            <span className="hidden 2xl:inline">{SCHOOL_PHONE_DISPLAY}</span>
          </a>
          {user ? (
            <Link href="/account" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold text-white">
                {user.email ? user.email.charAt(0).toUpperCase() : 'U'}
              </div>
            </Link>
          ) : null}
          {isAdmin || user ? (
            <button
              onClick={logout}
              className="bg-white/15 text-white font-semibold px-4 py-2 rounded-lg text-xs hover:bg-white/25 transition-all duration-200 border border-white/20"
            >
              Logout
            </button>
          ) : null}
          {!isAdmin && (
            <Link
              href="/pricing"
              className="bg-accent-400 text-brand-900 font-bold px-5 py-2.5 rounded-full text-xs hover:bg-accent-500 transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.97]"
            >
              Get full access · {ACCESS_PRICE}
            </Link>
          )}
        </div>

        {/* Mobile: hamburger */}
        <div className="flex xl:hidden items-center gap-1">
          <a
            href={`tel:${SCHOOL_PHONE_TEL}`}
            aria-label={`Call ${SCHOOL_PHONE_DISPLAY}`}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-brand-600 hover:bg-brand-700 transition-colors"
          >
            <svg viewBox="0 0 20 20" className="w-5 h-5 fill-white" aria-hidden="true"><path d="M2 3a1 1 0 011-1h2.15a1 1 0 01.99.84l.5 3a1 1 0 01-.55 1.05l-1.3.65a11.04 11.04 0 005.02 5.02l.65-1.3a1 1 0 011.05-.55l3 .5a1 1 0 01.84.99V17a1 1 0 01-1 1h-1C7.82 18 2 12.18 2 5V3z" /></svg>
          </a>
          <button
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="w-11 h-11 flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors"
          >
            <div className="w-5 h-[18px] relative flex flex-col justify-between">
              <span className={`absolute top-0 left-0 w-full h-0.5 bg-white rounded-full transition-all duration-200 ${open ? 'rotate-45 top-[8px]' : ''}`} />
              <span className={`absolute top-[8px] left-0 w-full h-0.5 bg-white rounded-full transition-all duration-200 ${open ? 'opacity-0 translate-x-2' : ''}`} />
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full transition-all duration-200 ${open ? '-rotate-45 bottom-[8px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`xl:hidden overflow-hidden transition-all duration-300 ease-out ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-brand-900 border-t border-white/10 px-4 pt-2 pb-4">
          <div className="space-y-0.5 mb-3">
            {navLinks.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`flex items-center px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive(l.href)
                    ? 'bg-white/15 text-white'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {l.label}
                {isActive(l.href) && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-400" />
                )}
              </Link>
            ))}
          </div>

          <div className="border-t border-white/10 pt-3 flex flex-col gap-2">
            {!isAdmin && (
              <Link
                href="/pricing"
                className="block text-center bg-accent-400 text-brand-900 font-bold py-3.5 rounded-xl text-sm hover:bg-accent-500 transition-all duration-200 shadow-sm"
              >
                Get full access · {ACCESS_PRICE}
              </Link>
            )}
            {(isAdmin || user) && (
              <button
                onClick={logout}
                className="w-full bg-white/15 text-white font-semibold py-3.5 rounded-xl text-sm hover:bg-white/25 transition-all duration-200 border border-white/10"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
