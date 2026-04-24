import React from 'react'

export interface InputNumberProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type' | 'value'> {
  value?: number | ''
  onChange?: (value: number | null) => void
}

export function InputNumber({ value, onChange, className, ...props }: InputNumberProps) {
  return (
    <input
      type="number"
      inputMode="numeric"
      className={['promptui-input-number', className].filter(Boolean).join(' ')}
      value={value ?? ''}
      onChange={e => {
        const raw = e.target.value
        onChange?.(raw === '' ? null : Number(raw))
      }}
      {...props}
    />
  )
}