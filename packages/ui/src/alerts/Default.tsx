import React from 'react'

export type AlertVariant = 'default' | 'destructive'

export interface AlertDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant
  children?: React.ReactNode
}

export function AlertDefault({ variant = 'default', children, className, ...props }: AlertDefaultProps) {
  return (
    <div
      role="alert"
      className={['promptui-alert-default', `promptui-alert-default--${variant}`, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
}

export function AlertTitle({ children, className, ...props }: AlertTitleProps) {
  return (
    <h5 className={['promptui-alert-title', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </h5>
  )
}

export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function AlertDescription({ children, className, ...props }: AlertDescriptionProps) {
  return (
    <div className={['promptui-alert-description', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}