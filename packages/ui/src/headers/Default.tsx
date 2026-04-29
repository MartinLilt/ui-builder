import React from 'react'

export type HeaderVariant = 'default' | 'minimal' | 'full' | 'sticky'

export interface HeaderDefaultProps extends React.HTMLAttributes<HTMLElement> {
  variant?: HeaderVariant
  children?: React.ReactNode
}

export function HeaderDefault({ variant = 'default', children, className, ...props }: HeaderDefaultProps) {
  return (
    <header
      data-variant={variant}
      className={[
        'promptui-header-default',
        `promptui-header-default--${variant}`,
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      <div className="promptui-header-default-inner">
        {children}
      </div>
    </header>
  )
}

export function HeaderBrand({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-header-brand', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function HeaderNav({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={['promptui-header-nav', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </nav>
  )
}

export function HeaderActions({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-header-actions', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}