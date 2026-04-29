import React from 'react'

export interface LayoutSectionProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

export function LayoutSection({ children, className, ...props }: LayoutSectionProps) {
  return (
    <section className={['promptui-layout-section', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </section>
  )
}