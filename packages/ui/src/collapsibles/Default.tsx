import React from 'react'

export interface CollapsibleDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

export function CollapsibleDefault({ open = false, onOpenChange: _onOpenChange, children, className, ...props }: CollapsibleDefaultProps) {
  return (
    <div
      data-state={open ? 'open' : 'closed'}
      className={['promptui-collapsible-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface CollapsibleTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export function CollapsibleTrigger({ children, className, ...props }: CollapsibleTriggerProps) {
  return (
    <button
      type="button"
      className={['promptui-collapsible-trigger', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export interface CollapsibleContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function CollapsibleContent({ children, className, ...props }: CollapsibleContentProps) {
  return (
    <div className={['promptui-collapsible-content', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}