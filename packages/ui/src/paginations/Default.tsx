import React from 'react'

export interface PaginationDefaultProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

export function PaginationDefault({ children, className, ...props }: PaginationDefaultProps) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={['promptui-pagination-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </nav>
  )
}

export function PaginationContent({ children, className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={['promptui-pagination-content', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </ul>
  )
}

export function PaginationItem({ children, className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li className={['promptui-pagination-item', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </li>
  )
}

export interface PaginationLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean
  children?: React.ReactNode
}

export function PaginationLink({ isActive, children, className, ...props }: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      data-state={isActive ? 'active' : undefined}
      className={['promptui-pagination-link', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </a>
  )
}

export function PaginationPrevious({ className, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      aria-label="Go to previous page"
      className={['promptui-pagination-previous', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children ?? 'Previous'}
    </a>
  )
}

export function PaginationNext({ className, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      aria-label="Go to next page"
      className={['promptui-pagination-next', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children ?? 'Next'}
    </a>
  )
}

export function PaginationEllipsis({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-hidden="true"
      className={['promptui-pagination-ellipsis', className].filter(Boolean).join(' ')}
      {...props}
    >
      …
    </span>
  )
}