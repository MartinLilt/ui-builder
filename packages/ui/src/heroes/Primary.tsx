import React from 'react'

export interface HeroPrimaryProps {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  primaryAction?: React.ReactNode
  secondaryAction?: React.ReactNode
  className?: string
}

export function HeroPrimary({ title, subtitle, primaryAction, secondaryAction, className }: HeroPrimaryProps) {
  return (
    <section className={['promptui-hero-primary', className].filter(Boolean).join(' ')}>
      {title && <h1 className="promptui-hero-title">{title}</h1>}
      {subtitle && <p className="promptui-hero-subtitle">{subtitle}</p>}
      {(primaryAction || secondaryAction) && (
        <div className="promptui-hero-actions">
          {primaryAction}
          {secondaryAction}
        </div>
      )}
    </section>
  )
}