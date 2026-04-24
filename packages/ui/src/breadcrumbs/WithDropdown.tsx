import React from 'react'

export interface BreadcrumbWithDropdownProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

export function BreadcrumbWithDropdown({ children, className, ...props }: BreadcrumbWithDropdownProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className={['promptui-breadcrumb-with-dropdown', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </nav>
  )
}

export interface BreadcrumbDropdownProps extends React.HTMLAttributes<HTMLLIElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

export function BreadcrumbDropdown({ open = false, onOpenChange: _onOpenChange, children, className, ...props }: BreadcrumbDropdownProps) {
  return (
    <li
      data-state={open ? 'open' : 'closed'}
      className={['promptui-breadcrumb-dropdown', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </li>
  )
}

export function BreadcrumbDropdownTrigger({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      aria-haspopup="menu"
      className={['promptui-breadcrumb-dropdown-trigger', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children ?? '…'}
    </button>
  )
}

export function BreadcrumbDropdownContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="menu"
      className={['promptui-breadcrumb-dropdown-content', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}