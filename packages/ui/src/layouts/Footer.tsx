import React from 'react'

export interface LayoutFooterProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

export function LayoutFooter({ children, className, ...props }: LayoutFooterProps) {
  return (
    <footer className={['promptui-layout-footer', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </footer>
  )
}