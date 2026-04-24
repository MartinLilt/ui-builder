import React from 'react'

export interface PopoverDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

export function PopoverDefault({ open = false, onOpenChange: _onOpenChange, children, className, ...props }: PopoverDefaultProps) {
  return (
    <div
      data-state={open ? 'open' : 'closed'}
      className={['promptui-popover-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface PopoverTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export function PopoverTrigger({ children, className, ...props }: PopoverTriggerProps) {
  return (
    <button
      type="button"
      className={['promptui-popover-trigger', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function PopoverContent({ children, className, ...props }: PopoverContentProps) {
  return (
    <div
      role="dialog"
      className={['promptui-popover-content', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}