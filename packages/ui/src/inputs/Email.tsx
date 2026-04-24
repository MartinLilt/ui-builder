import React from 'react'

export interface InputEmailProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  value?: string
  onChange?: (value: string) => void
}

export function InputEmail({ value, onChange, className, ...props }: InputEmailProps) {
  return (
    <input
      type="email"
      autoComplete="email"
      inputMode="email"
      className={['promptui-input-email', className].filter(Boolean).join(' ')}
      value={value ?? ''}
      onChange={e => onChange?.(e.target.value)}
      {...props}
    />
  )
}