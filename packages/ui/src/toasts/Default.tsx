import React from 'react'

export type ToastVariant = 'default' | 'destructive'

export interface ToastDefaultProps extends React.HTMLAttributes<HTMLLIElement> {
  variant?: ToastVariant
  open?: boolean
  children?: React.ReactNode
}

export function ToastDefault({ variant = 'default', open = true, children, className, ...props }: ToastDefaultProps) {
  if (!open) return null
  return (
    <li
      role="status"
      aria-live="polite"
      data-state="open"
      data-variant={variant}
      className={['promptui-toast-default', `promptui-toast-default--${variant}`, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </li>
  )
}

export function ToastAction({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={['promptui-toast-action', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export function ToastClose({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      aria-label="Close"
      className={['promptui-toast-close', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children ?? '×'}
    </button>
  )
}

export function ToastTitle({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-toast-title', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function ToastDescription({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-toast-description', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function ToastViewport({ children, className, ...props }: React.HTMLAttributes<HTMLOListElement>) {
  return (
    <ol className={['promptui-toast-viewport', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </ol>
  )
}