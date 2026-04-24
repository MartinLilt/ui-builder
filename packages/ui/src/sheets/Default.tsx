import React from 'react'

export type SheetSide = 'top' | 'bottom' | 'left' | 'right'

export interface SheetDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  side?: SheetSide
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

export function SheetDefault({ open = false, side = 'right', onOpenChange: _onOpenChange, children, className, ...props }: SheetDefaultProps) {
  if (!open) return null
  return (
    <div
      role="dialog"
      aria-modal="true"
      data-state="open"
      data-side={side}
      className={['promptui-sheet-default', `promptui-sheet-default--${side}`, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function SheetTrigger({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={['promptui-sheet-trigger', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </button>
  )
}

export function SheetContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-sheet-content', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function SheetHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-sheet-header', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function SheetFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-sheet-footer', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function SheetTitle({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={['promptui-sheet-title', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </h2>
  )
}

export function SheetDescription({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={['promptui-sheet-description', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </p>
  )
}

export function SheetClose({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" aria-label="Close" className={['promptui-sheet-close', className].filter(Boolean).join(' ')} {...props}>
      {children ?? '×'}
    </button>
  )
}