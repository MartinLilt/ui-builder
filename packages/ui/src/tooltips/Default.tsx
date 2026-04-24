import React from 'react'

export interface TooltipDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  children?: React.ReactNode
}

export function TooltipDefault({ open = false, children, className, ...props }: TooltipDefaultProps) {
  return (
    <div
      data-state={open ? 'open' : 'closed'}
      className={['promptui-tooltip-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface TooltipTriggerProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode
}

export function TooltipTrigger({ children, className, ...props }: TooltipTriggerProps) {
  return (
    <span className={['promptui-tooltip-trigger', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </span>
  )
}

export interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function TooltipContent({ children, className, ...props }: TooltipContentProps) {
  return (
    <div
      role="tooltip"
      className={['promptui-tooltip-content', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface TooltipProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  delayDuration?: number
  children?: React.ReactNode
}

export function TooltipProvider({ delayDuration: _delayDuration, children, className, ...props }: TooltipProviderProps) {
  return (
    <div className={['promptui-tooltip-provider', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}