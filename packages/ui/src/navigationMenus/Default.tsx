import React from 'react'

export interface NavigationMenuDefaultProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

export function NavigationMenuDefault({ children, className, ...props }: NavigationMenuDefaultProps) {
  return (
    <nav
      aria-label="Main"
      className={['promptui-navigation-menu-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </nav>
  )
}

export function NavigationMenuList({ children, className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={['promptui-navigation-menu-list', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </ul>
  )
}

export function NavigationMenuItem({ children, className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li className={['promptui-navigation-menu-item', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </li>
  )
}

export function NavigationMenuTrigger({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={['promptui-navigation-menu-trigger', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export function NavigationMenuContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-navigation-menu-content', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function NavigationMenuLink({ children, className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={['promptui-navigation-menu-link', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </a>
  )
}