import React from 'react'
import type { ButtonVariant } from './Default'

export type ButtonIconSize = 'sm' | 'default' | 'lg'

export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Required — icon-only buttons have no visible text. */
  'aria-label': string
  variant?: ButtonVariant
  size?: ButtonIconSize
  children?: React.ReactNode
}

export function ButtonIcon({ variant = 'default', size = 'default', children, className, ...props }: ButtonIconProps) {
  return (
    <button
      className={[
        'promptui-button-icon',
        `promptui-button-icon--${variant}`,
        `promptui-button-icon--${size}`,
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}