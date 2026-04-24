import React from 'react'

export interface InputSearchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  value?: string
  onChange?: (value: string) => void
}

export function InputSearch({ value, onChange, className, ...props }: InputSearchProps) {
  return (
    <input
      type="search"
      role="searchbox"
      className={['promptui-input-search', className].filter(Boolean).join(' ')}
      value={value ?? ''}
      onChange={e => onChange?.(e.target.value)}
      {...props}
    />
  )
}