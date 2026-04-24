import React from 'react'

export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

export interface ButtonDefaultProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children?: React.ReactNode
}

export function ButtonDefault({ variant = 'default', size = 'default', children, className, ...props }: ButtonDefaultProps) {
  return (
    <button
      className={[
        'promptui-button-default',
        `promptui-button-default--${variant}`,
        `promptui-button-default--${size}`,
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}