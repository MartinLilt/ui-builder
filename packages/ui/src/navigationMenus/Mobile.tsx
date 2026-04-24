import React from 'react'

export interface NavigationMenuMobileProps extends React.HTMLAttributes<HTMLElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

export function NavigationMenuMobile({ open = false, onOpenChange: _onOpenChange, children, className, ...props }: NavigationMenuMobileProps) {
  return (
    <nav
      aria-label="Main"
      data-state={open ? 'open' : 'closed'}
      className={['promptui-navigation-menu-mobile', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </nav>
  )
}

export function NavigationMenuMobileTrigger({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      aria-label="Open navigation"
      aria-haspopup="menu"
      className={['promptui-navigation-menu-mobile-trigger', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children ?? '☰'}
    </button>
  )
}

export function NavigationMenuMobileDrawer({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="menu"
      className={['promptui-navigation-menu-mobile-drawer', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function NavigationMenuMobileClose({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      aria-label="Close navigation"
      className={['promptui-navigation-menu-mobile-close', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children ?? '×'}
    </button>
  )
}