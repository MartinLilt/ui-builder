import React from 'react'

export interface LayoutHeaderProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

export function LayoutHeader({ children, className, ...props }: LayoutHeaderProps) {
  return (
    <header className={['promptui-layout-header', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </header>
  )
}