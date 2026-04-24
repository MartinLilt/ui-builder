import React from 'react'

export interface AlertDialogDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

export function AlertDialogDefault({ open = false, onOpenChange: _onOpenChange, children, className, ...props }: AlertDialogDefaultProps) {
  if (!open) return null
  return (
    <div
      role="alertdialog"
      aria-modal="true"
      data-state="open"
      className={['promptui-alert-dialog-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function AlertDialogTrigger({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={['promptui-alert-dialog-trigger', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </button>
  )
}

export function AlertDialogContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-alert-dialog-content', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function AlertDialogHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-alert-dialog-header', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function AlertDialogFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-alert-dialog-footer', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function AlertDialogTitle({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={['promptui-alert-dialog-title', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </h2>
  )
}

export function AlertDialogDescription({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={['promptui-alert-dialog-description', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </p>
  )
}

export function AlertDialogAction({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={['promptui-alert-dialog-action', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </button>
  )
}

export function AlertDialogCancel({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={['promptui-alert-dialog-cancel', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </button>
  )
}