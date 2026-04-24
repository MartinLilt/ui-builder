import React from 'react'

export interface MenubarDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function MenubarDefault({ children, className, ...props }: MenubarDefaultProps) {
  return (
    <div
      role="menubar"
      className={['promptui-menubar-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function MenubarMenu({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-menubar-menu', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function MenubarTrigger({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      role="menuitem"
      className={['promptui-menubar-trigger', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export function MenubarContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="menu"
      className={['promptui-menubar-content', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface MenubarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  children?: React.ReactNode
}

export function MenubarItem({ disabled, children, className, ...props }: MenubarItemProps) {
  return (
    <div
      role="menuitem"
      aria-disabled={disabled || undefined}
      className={['promptui-menubar-item', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function MenubarSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="separator"
      className={['promptui-menubar-separator', className].filter(Boolean).join(' ')}
      {...props}
    />
  )
}