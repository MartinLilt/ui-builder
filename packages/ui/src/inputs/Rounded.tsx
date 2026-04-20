import React from 'react'

export type InputState = 'default' | 'focused' | 'error'

export interface InputRoundedProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  state?: InputState
  className?: string
}

export function InputRounded({ value, onChange, placeholder, state = 'default', className }: InputRoundedProps) {
  return (
    <input
      className={['promptui-input-rounded', `promptui-input-rounded--${state}`, className].filter(Boolean).join(' ')}
      value={value ?? ''}
      onChange={e => onChange?.(e.target.value)}
      placeholder={placeholder}
    />
  )
}