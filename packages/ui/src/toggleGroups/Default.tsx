import React from 'react'

export type ToggleGroupType = 'single' | 'multiple'

export interface ToggleGroupDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: ToggleGroupType
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  children?: React.ReactNode
}

export function ToggleGroupDefault({ type = 'single', value, onValueChange: _onValueChange, children, className, ...props }: ToggleGroupDefaultProps) {
  return (
    <div
      role="group"
      data-type={type}
      className={['promptui-toggle-group-default', className].filter(Boolean).join(' ')}
      data-value={Array.isArray(value) ? value.join(',') : value}
      {...props}
    >
      {children}
    </div>
  )
}

export interface ToggleGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  pressed?: boolean
  children?: React.ReactNode
}

export function ToggleGroupItem({ value, pressed = false, children, className, ...props }: ToggleGroupItemProps) {
  return (
    <button
      type="button"
      data-value={value}
      data-state={pressed ? 'on' : 'off'}
      aria-pressed={pressed}
      className={['promptui-toggle-group-item', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}