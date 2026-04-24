import React from 'react'

export interface InputDefaultProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string
  onChange?: (value: string) => void
}

export function InputDefault({ value, onChange, className, type = 'text', ...props }: InputDefaultProps) {
  return (
    <input
      type={type}
      className={['promptui-input-default', className].filter(Boolean).join(' ')}
      value={value ?? ''}
      onChange={e => onChange?.(e.target.value)}
      {...props}
    />
  )
}