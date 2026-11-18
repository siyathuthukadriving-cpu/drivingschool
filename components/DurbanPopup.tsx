'use client'

/**
 * DurbanPopup — a one-question welcome: "Are you from Durban?"
 *
 *  - Yes → opens the Durban learners' WhatsApp group in a new tab.
 *  - No  → closes and the visitor carries on with the normal site.
 *
 * The answer is remembered in localStorage so it is asked once per browser.
 * Bump POPUP_VERSION to ask everyone again. Not shown on admin pages.
 */
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const POPUP_VERSION = 'v1'
const ANSWER_KEY = `sk_durban_popup_${POPUP_VERSION}`
export const DURBAN_WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/CmUQ51EvQri6u8r8aT1JKR?s=cl&p=a&iam=2'

export default function DurbanPopup() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (pathname?.startsWith('/admin')) return
    try { if (localStorage.getItem(ANSWER_KEY)) return } catch {}
    // A short delay so it appears after the page has painted.
    const t = setTimeout(() => setOpen(true), 1200)
    return () => clearTimeout(t)
  }, [pathname])

  function answer(value: 'yes' | 'no') {
    try { localStorage.setItem(ANSWER_KEY, value) } catch {}
    setOpen(false)
  }

  if (!open || pathname?.startsWith('/admin')) return null

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center px-4" role="dialog" aria-modal="true" aria-labelledby="durban-popup-title">
      <div className="absolute inset-0 bg-black/60" onClick={() => answer('no')} />

      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="relative bg-brand-700 px-7 pb-6 pt-7 text-center text-white">
          <button
            onClick={() => answer('no')}
            aria-label="Close"
            className="absolute right-4 top-3 text-2xl leading-none text-brand-200 hover:text-white"
          >×</button>
          <div className="mb-2 text-5xl" aria-hidden="true">📍</div>
          <h2 id="durban-popup-title" className="text-2xl font-extrabold">Are you from Durban?</h2>
          <p className="mt-1 text-sm text-brand-100">Tell us where you are and we&apos;ll point you to the right place.</p>
        </div>

        <div className="space-y-3 px-7 py-6">
          <a
            href={DURBAN_WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => answer('yes')}
            className="flex w-full items-center gap-3 rounded-xl border-2 border-green-600 px-4 py-3.5 text-left font-semibold text-green-800 transition-colors hover:bg-green-50"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-green-600" aria-hidden="true" />
            <span>
              Yes, I&apos;m from Durban
              <span className="block text-xs font-normal text-gray-500">Join our Durban learners&apos; WhatsApp group</span>
            </span>
          </a>

          <button
            onClick={() => answer('no')}
            className="flex w-full items-center gap-3 rounded-xl border-2 border-gray-200 px-4 py-3.5 text-left font-semibold text-gray-800 transition-colors hover:bg-gray-50"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-gray-300" aria-hidden="true" />
            <span>
              No, I&apos;m from somewhere else
              <span className="block text-xs font-normal text-gray-500">Carry on to the website</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
