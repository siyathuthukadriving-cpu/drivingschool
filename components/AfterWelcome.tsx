'use client'

/**
 * AfterWelcome — holds its children back until the welcome popup
 * (WelcomeQuizPopup) has been dealt with, so no other pop-up appears before it.
 *
 * WelcomeQuizPopup sets window.__skWelcomeOpen while it is loading or on
 * screen and fires a "sk-welcome-closed" event when it is closed, skipped, or
 * not needed. The children are not even mounted until then, so their own
 * timers and "show once" checks start only after the welcome popup is gone.
 */
import { useEffect, useState } from 'react'

export default function AfterWelcome({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!(window as any).__skWelcomeOpen) {
      setReady(true)
      return
    }
    const onClosed = () => setReady(true)
    window.addEventListener('sk-welcome-closed', onClosed, { once: true })
    return () => window.removeEventListener('sk-welcome-closed', onClosed)
  }, [])

  return ready ? <>{children}</> : null
}
