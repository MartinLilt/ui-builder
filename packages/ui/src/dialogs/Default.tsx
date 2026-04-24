import React from 'react'

export interface DialogDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

export function DialogDefault({ open = false, onOpenChange: _onOpenChange, children, className, ...props }: DialogDefaultProps) {
  if (!open) return null
  return (
    <div
      role="dialog"
      aria-modal="true"
      data-state="open"
      className={['promptui-dialog-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function DialogTrigger({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={['promptui-dialog-trigger', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </button>
  )
}

export function DialogContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-dialog-content', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function DialogHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-dialog-header', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function DialogFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-dialog-footer', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function DialogTitle({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={['promptui-dialog-title', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </h2>
  )
}

export function DialogDescription({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={['promptui-dialog-description', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </p>
  )
}

export function DialogClose({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" aria-label="Close" className={['promptui-dialog-close', className].filter(Boolean).join(' ')} {...props}>
      {children ?? '×'}
    </button>
  )
}