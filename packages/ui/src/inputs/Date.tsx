import React from 'react'

export interface InputDateProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  value?: string
  onChange?: (value: string) => void
}

export function InputDate({ value, onChange, className, ...props }: InputDateProps) {
  return (
    <input
      type="date"
      className={['promptui-input-date', className].filter(Boolean).join(' ')}
      value={value ?? ''}
      onChange={e => onChange?.(e.target.value)}
      {...props}
    />
  )
}