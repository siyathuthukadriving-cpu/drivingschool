import React from 'react'
import clsx from 'clsx'

export default function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx('card-elevated p-6 rounded-2xl', className)}>
      {children}
    </div>
  )
}
