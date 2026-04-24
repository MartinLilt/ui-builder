import React from 'react'
import type { ButtonVariant, ButtonSize } from './Default'

export interface ButtonLoadingProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  spinner?: React.ReactNode
  children?: React.ReactNode
}

export function ButtonLoading({
  variant = 'default',
  size = 'default',
  loading = false,
  spinner,
  children,
  className,
  disabled,
  ...props
}: ButtonLoadingProps) {
  return (
    <button
      data-loading={loading || undefined}
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      className={[
        'promptui-button-loading',
        `promptui-button-loading--${variant}`,
        `promptui-button-loading--${size}`,
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {loading && (
        <span className="promptui-button-loading-spinner" aria-hidden="true">
          {spinner ?? <span className="promptui-spinner" />}
        </span>
      )}
      {children}
    </button>
  )
}