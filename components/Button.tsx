import React from 'react'
import clsx from 'clsx'

type Variant = 'primary' | 'secondary' | 'ghost' | 'accent'

export default function Button({
  children,
  className,
  variant = 'primary',
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; className?: string }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200'
  const variants: Record<Variant, string> = {
    primary: 'bg-brand-600 text-white px-5 py-2.5 shadow-sm hover:bg-brand-700',
    secondary: 'bg-white text-brand-700 px-5 py-2.5 border border-brand-200 hover:bg-brand-50',
    ghost: 'bg-transparent text-gray-700 px-3 py-2 hover:bg-gray-100',
    accent: 'bg-accent-400 text-brand-900 px-5 py-2.5 shadow-sm hover:bg-accent-500',
  }

  return (
    <button className={clsx(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  )
}
