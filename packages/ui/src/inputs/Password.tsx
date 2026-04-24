import React from 'react'

export interface InputPasswordProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  value?: string
  onChange?: (value: string) => void
}

export function InputPassword({ value, onChange, className, ...props }: InputPasswordProps) {
  return (
    <input
      type="password"
      autoComplete="current-password"
      className={['promptui-input-password', className].filter(Boolean).join(' ')}
      value={value ?? ''}
      onChange={e => onChange?.(e.target.value)}
      {...props}
    />
  )
}