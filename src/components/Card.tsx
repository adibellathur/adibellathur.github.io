import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  onClick?: () => void
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'py-6 px-8',
  lg: 'py-8 px-12'
}

export function Card({ 
  children, 
  className = '', 
  hover = false, 
  padding = 'lg',
  onClick 
}: CardProps) {
  const baseClass = hover ? 'glass-card-hover' : 'glass-card'
  const paddingClass = paddingClasses[padding]
  const cursorClass = onClick ? 'cursor-pointer' : ''
  
  return (
    <div 
      className={`${baseClass} ${paddingClass} ${cursorClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export function ProjectCard({ 
  title, 
  className = '', 
  onClick 
}: { 
  title: string
  className?: string
  onClick?: () => void 
}) {
  return (
    <Card
      hover
      padding="none"
      className={`aspect-square ${className}`}
      onClick={onClick}
    >
      <div className="w-full h-full flex items-center justify-center">
        {/* Project thumbnails would go here */}
        <span className="text-xs text-gray-400">{title}</span>
      </div>
    </Card>
  )
}
