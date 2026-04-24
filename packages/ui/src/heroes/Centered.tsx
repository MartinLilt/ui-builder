import React from 'react'

export interface HeroCenteredProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

export function HeroCentered({ children, className, ...props }: HeroCenteredProps) {
  return (
    <section
      className={['promptui-hero-centered', className].filter(Boolean).join(' ')}
      {...props}
    >
      <div className="promptui-hero-centered-inner">
        {children}
      </div>
    </section>
  )
}