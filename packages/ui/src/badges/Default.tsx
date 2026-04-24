import React from 'react'

export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline'

export interface BadgeDefaultProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  children?: React.ReactNode
}

export function BadgeDefault({ variant = 'default', children, className, ...props }: BadgeDefaultProps) {
  return (
    <span
      className={['promptui-badge-default', `promptui-badge-default--${variant}`, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </span>
  )
}