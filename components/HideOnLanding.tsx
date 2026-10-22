'use client'

import { usePathname } from 'next/navigation'

/**
 * The school landing page ("/") is a standalone front end. Practice-platform banners and
 * pop-ups (free promo, live sessions, test prep) stay on the platform pages only.
 */
export default function HideOnLanding({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return pathname === '/' ? null : <>{children}</>
}
