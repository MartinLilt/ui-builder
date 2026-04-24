import React from 'react'

export interface HoverCardDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  children?: React.ReactNode
}

export function HoverCardDefault({ open = false, children, className, ...props }: HoverCardDefaultProps) {
  return (
    <div
      data-state={open ? 'open' : 'closed'}
      className={['promptui-hover-card-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface HoverCardTriggerProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode
}

export function HoverCardTrigger({ children, className, ...props }: HoverCardTriggerProps) {
  return (
    <span className={['promptui-hover-card-trigger', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </span>
  )
}

export interface HoverCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function HoverCardContent({ children, className, ...props }: HoverCardContentProps) {
  return (
    <div
      role="tooltip"
      className={['promptui-hover-card-content', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}