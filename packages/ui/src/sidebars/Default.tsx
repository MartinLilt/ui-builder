import React from 'react'

export type SidebarSide = 'left' | 'right'
export type SidebarVariant = 'sidebar' | 'floating' | 'inset'

export interface SidebarDefaultProps extends React.HTMLAttributes<HTMLElement> {
  side?: SidebarSide
  variant?: SidebarVariant
  collapsed?: boolean
  children?: React.ReactNode
}

export function SidebarDefault({ side = 'left', variant = 'sidebar', collapsed = false, children, className, ...props }: SidebarDefaultProps) {
  return (
    <aside
      data-side={side}
      data-variant={variant}
      data-state={collapsed ? 'collapsed' : 'expanded'}
      className={[
        'promptui-sidebar-default',
        `promptui-sidebar-default--${side}`,
        `promptui-sidebar-default--${variant}`,
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </aside>
  )
}

export function SidebarHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-sidebar-header', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function SidebarContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-sidebar-content', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function SidebarFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-sidebar-footer', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function SidebarGroup({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-sidebar-group', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function SidebarGroupLabel({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-sidebar-group-label', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function SidebarMenu({ children, className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={['promptui-sidebar-menu', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </ul>
  )
}

export function SidebarMenuItem({ children, className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li className={['promptui-sidebar-menu-item', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </li>
  )
}

export interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  children?: React.ReactNode
}

export function SidebarMenuButton({ isActive, children, className, ...props }: SidebarMenuButtonProps) {
  return (
    <button
      type="button"
      data-active={isActive || undefined}
      className={['promptui-sidebar-menu-button', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export function SidebarTrigger({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      aria-label="Toggle sidebar"
      className={['promptui-sidebar-trigger', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children ?? '☰'}
    </button>
  )
}