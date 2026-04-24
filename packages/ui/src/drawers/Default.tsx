import React from 'react'

export type DrawerSide = 'top' | 'bottom' | 'left' | 'right'

export interface DrawerDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  side?: DrawerSide
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

export function DrawerDefault({ open = false, side = 'bottom', onOpenChange: _onOpenChange, children, className, ...props }: DrawerDefaultProps) {
  if (!open) return null
  return (
    <div
      role="dialog"
      aria-modal="true"
      data-state="open"
      data-side={side}
      className={['promptui-drawer-default', `promptui-drawer-default--${side}`, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function DrawerTrigger({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={['promptui-drawer-trigger', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </button>
  )
}

export function DrawerContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-drawer-content', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function DrawerHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-drawer-header', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function DrawerFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-drawer-footer', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function DrawerTitle({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={['promptui-drawer-title', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </h2>
  )
}

export function DrawerDescription({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={['promptui-drawer-description', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </p>
  )
}

export function DrawerClose({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" aria-label="Close" className={['promptui-drawer-close', className].filter(Boolean).join(' ')} {...props}>
      {children ?? '×'}
    </button>
  )
}