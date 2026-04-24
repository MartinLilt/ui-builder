import React from 'react'

export interface TextareaDefaultProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  value?: string
  onChange?: (value: string) => void
}

export function TextareaDefault({ value, onChange, className, ...props }: TextareaDefaultProps) {
  return (
    <textarea
      className={['promptui-textarea-default', className].filter(Boolean).join(' ')}
      value={value ?? ''}
      onChange={e => onChange?.(e.target.value)}
      {...props}
    />
  )
}