import React from 'react'

export interface LayoutNavProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

export function LayoutNav({ children, className, ...props }: LayoutNavProps) {
  return (
    <nav className={['promptui-layout-nav', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </nav>
  )
}