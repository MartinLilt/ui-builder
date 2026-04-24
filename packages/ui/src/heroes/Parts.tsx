import React from 'react'

export function HeroTitle({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={['promptui-hero-title', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </h1>
  )
}

export function HeroSubtitle({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={['promptui-hero-subtitle', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </p>
  )
}

export function HeroActions({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-hero-actions', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function HeroEyebrow({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-hero-eyebrow', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}