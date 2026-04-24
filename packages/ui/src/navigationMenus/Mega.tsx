import React from 'react'

export interface NavigationMenuMegaProps extends React.HTMLAttributes<HTMLElement> {
  open?: boolean
  children?: React.ReactNode
}

export function NavigationMenuMega({ open = false, children, className, ...props }: NavigationMenuMegaProps) {
  return (
    <nav
      aria-label="Main"
      data-state={open ? 'open' : 'closed'}
      className={['promptui-navigation-menu-mega', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </nav>
  )
}

export function NavigationMenuMegaContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-navigation-menu-mega-content', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export interface NavigationMenuMegaColumnsProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number
  children?: React.ReactNode
}

export function NavigationMenuMegaColumns({ columns, children, className, style, ...props }: NavigationMenuMegaColumnsProps) {
  return (
    <div
      data-columns={columns}
      className={['promptui-navigation-menu-mega-columns', className].filter(Boolean).join(' ')}
      style={columns ? { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, ...style } : style}
      {...props}
    >
      {children}
    </div>
  )
}

export function NavigationMenuMegaColumn({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-navigation-menu-mega-column', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function NavigationMenuMegaGroup({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-navigation-menu-mega-group', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function NavigationMenuMegaGroupTitle({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={['promptui-navigation-menu-mega-group-title', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </h3>
  )
}