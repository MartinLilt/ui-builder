import React from 'react'

export interface RadioGroupDefaultProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string
  onValueChange?: (value: string) => void
  name?: string
  children?: React.ReactNode
}

export function RadioGroupDefault({ value, onValueChange: _onValueChange, name, children, className, ...props }: RadioGroupDefaultProps) {
  return (
    <div
      role="radiogroup"
      data-name={name}
      data-value={value}
      className={['promptui-radio-group-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface RadioGroupItemProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  value: string
}

export function RadioGroupItem({ value, className, ...props }: RadioGroupItemProps) {
  return (
    <input
      type="radio"
      value={value}
      className={['promptui-radio-group-item', className].filter(Boolean).join(' ')}
      {...props}
    />
  )
}