import type { ReactNode } from 'react'

interface SectionProps {
  title: string
  children: ReactNode
  className?: string
}

export function Section({ title, children, className = '' }: SectionProps) {
  return (
    <div className={`mb-16 section-padding ${className}`}>
      <h2 className="text-xl font-normal mb-8">{title}</h2>
      {children}
    </div>
  )
}
