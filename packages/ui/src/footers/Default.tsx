import React from 'react'

export type FooterVariant = 'default' | 'minimal' | 'columns' | 'newsletter'

export interface FooterDefaultProps extends React.HTMLAttributes<HTMLElement> {
  variant?: FooterVariant
  children?: React.ReactNode
}

export function FooterDefault({ variant = 'default', children, className, ...props }: FooterDefaultProps) {
  return (
    <footer
      data-variant={variant}
      className={[
        'promptui-footer-default',
        `promptui-footer-default--${variant}`,
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      <div className="promptui-footer-default-inner">
        {children}
      </div>
    </footer>
  )
}

export interface FooterColumnsProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number
}

export function FooterColumns({ columns, children, className, style, ...props }: FooterColumnsProps) {
  const styleWithCols: React.CSSProperties = columns
    ? { ...style, gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }
    : style ?? {}
  return (
    <div
      className={['promptui-footer-columns', className].filter(Boolean).join(' ')}
      style={styleWithCols}
      {...props}
    >
      {children}
    </div>
  )
}

export function FooterColumn({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-footer-column', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function FooterColumnTitle({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 className={['promptui-footer-column-title', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </h4>
  )
}

export function FooterLinks({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-footer-links', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export interface FooterLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode
}

export function FooterLink({ children, className, ...props }: FooterLinkProps) {
  return (
    <a className={['promptui-footer-link', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </a>
  )
}

export function FooterBottom({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-footer-bottom', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function FooterCopyright({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={['promptui-footer-copyright', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </p>
  )
}

export function FooterLegalLinks({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-footer-legal-links', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function FooterSocial({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-footer-social', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}