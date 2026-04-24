import React from 'react'

export interface TooltipRichProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  children?: React.ReactNode
}

export function TooltipRich({ open = false, children, className, ...props }: TooltipRichProps) {
  return (
    <div
      data-state={open ? 'open' : 'closed'}
      className={['promptui-tooltip-rich', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function TooltipRichTrigger({ children, className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={['promptui-tooltip-rich-trigger', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </span>
  )
}

export function TooltipRichContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="tooltip"
      className={['promptui-tooltip-rich-content', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function TooltipRichTitle({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-tooltip-rich-title', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function TooltipRichDescription({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-tooltip-rich-description', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function TooltipRichActions({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-tooltip-rich-actions', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}