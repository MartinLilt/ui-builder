import React from 'react'

export interface BreadcrumbDefaultProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

export function BreadcrumbDefault({ children, className, ...props }: BreadcrumbDefaultProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className={['promptui-breadcrumb-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </nav>
  )
}

export interface BreadcrumbListProps extends React.OlHTMLAttributes<HTMLOListElement> {
  children?: React.ReactNode
}

export function BreadcrumbList({ children, className, ...props }: BreadcrumbListProps) {
  return (
    <ol className={['promptui-breadcrumb-list', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </ol>
  )
}

export interface BreadcrumbItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children?: React.ReactNode
}

export function BreadcrumbItem({ children, className, ...props }: BreadcrumbItemProps) {
  return (
    <li className={['promptui-breadcrumb-item', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </li>
  )
}

export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode
}

export function BreadcrumbLink({ children, className, ...props }: BreadcrumbLinkProps) {
  return (
    <a className={['promptui-breadcrumb-link', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </a>
  )
}

export interface BreadcrumbPageProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode
}

export function BreadcrumbPage({ children, className, ...props }: BreadcrumbPageProps) {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={['promptui-breadcrumb-page', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </span>
  )
}

export interface BreadcrumbSeparatorProps extends React.HTMLAttributes<HTMLLIElement> {
  children?: React.ReactNode
}

export function BreadcrumbSeparator({ children, className, ...props }: BreadcrumbSeparatorProps) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={['promptui-breadcrumb-separator', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children ?? '/'}
    </li>
  )
}

export function BreadcrumbEllipsis({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={['promptui-breadcrumb-ellipsis', className].filter(Boolean).join(' ')}
      {...props}
    >
      …
    </span>
  )
}