import React from 'react'

export interface LayoutMainProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

export function LayoutMain({ children, className, ...props }: LayoutMainProps) {
  return (
    <main className={['promptui-layout-main', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </main>
  )
}