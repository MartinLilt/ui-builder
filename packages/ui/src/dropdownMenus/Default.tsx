import React from 'react'

export interface DropdownMenuDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

export function DropdownMenuDefault({ open = false, onOpenChange: _onOpenChange, children, className, ...props }: DropdownMenuDefaultProps) {
  return (
    <div
      data-state={open ? 'open' : 'closed'}
      className={['promptui-dropdown-menu-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function DropdownMenuTrigger({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      aria-haspopup="menu"
      className={['promptui-dropdown-menu-trigger', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export function DropdownMenuContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="menu"
      className={['promptui-dropdown-menu-content', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  children?: React.ReactNode
}

export function DropdownMenuItem({ disabled, children, className, ...props }: DropdownMenuItemProps) {
  return (
    <div
      role="menuitem"
      aria-disabled={disabled || undefined}
      data-disabled={disabled || undefined}
      className={['promptui-dropdown-menu-item', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function DropdownMenuLabel({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-dropdown-menu-label', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function DropdownMenuSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="separator"
      className={['promptui-dropdown-menu-separator', className].filter(Boolean).join(' ')}
      {...props}
    />
  )
}

export function DropdownMenuGroup({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div role="group" className={['promptui-dropdown-menu-group', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export interface DropdownMenuCheckboxItemProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean
  children?: React.ReactNode
}

export function DropdownMenuCheckboxItem({ checked = false, children, className, ...props }: DropdownMenuCheckboxItemProps) {
  return (
    <div
      role="menuitemcheckbox"
      aria-checked={checked}
      data-state={checked ? 'checked' : 'unchecked'}
      className={['promptui-dropdown-menu-checkbox-item', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}