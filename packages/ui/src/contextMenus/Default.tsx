import React from 'react'

export interface ContextMenuDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

export function ContextMenuDefault({ open = false, onOpenChange: _onOpenChange, children, className, ...props }: ContextMenuDefaultProps) {
  return (
    <div
      data-state={open ? 'open' : 'closed'}
      className={['promptui-context-menu-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function ContextMenuTrigger({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-context-menu-trigger', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function ContextMenuContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="menu"
      className={['promptui-context-menu-content', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface ContextMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  children?: React.ReactNode
}

export function ContextMenuItem({ disabled, children, className, ...props }: ContextMenuItemProps) {
  return (
    <div
      role="menuitem"
      aria-disabled={disabled || undefined}
      data-disabled={disabled || undefined}
      className={['promptui-context-menu-item', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function ContextMenuSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="separator"
      className={['promptui-context-menu-separator', className].filter(Boolean).join(' ')}
      {...props}
    />
  )
}

export function ContextMenuLabel({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-context-menu-label', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function ContextMenuGroup({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div role="group" className={['promptui-context-menu-group', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}