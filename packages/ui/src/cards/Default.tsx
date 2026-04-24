import React from 'react'

export interface CardDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function CardDefault({ children, className, ...props }: CardDefaultProps) {
  return (
    <div className={['promptui-card-default', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-card-header', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={['promptui-card-title', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={['promptui-card-description', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-card-content', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-card-footer', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}