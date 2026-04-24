import React from 'react'

export interface ToggleDefaultProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  pressed?: boolean
  onPressedChange?: (pressed: boolean) => void
  children?: React.ReactNode
}

export function ToggleDefault({ pressed = false, onPressedChange, children, className, ...props }: ToggleDefaultProps) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      data-state={pressed ? 'on' : 'off'}
      className={['promptui-toggle-default', className].filter(Boolean).join(' ')}
      onClick={() => onPressedChange?.(!pressed)}
      {...props}
    >
      {children}
    </button>
  )
}