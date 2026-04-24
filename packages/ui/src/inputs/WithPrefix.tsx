import React from 'react'

export interface InputWithPrefixProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'prefix'> {
  value?: string
  onChange?: (value: string) => void
  prefix?: React.ReactNode
}

export function InputWithPrefix({
  prefix,
  value,
  onChange,
  className,
  type = 'text',
  ...props
}: InputWithPrefixProps) {
  return (
    <div className={['promptui-input-with-prefix', className].filter(Boolean).join(' ')}>
      {prefix !== undefined && prefix !== null && (
        <span className="promptui-input-with-prefix-prefix">{prefix}</span>
      )}
      <input
        type={type}
        className="promptui-input-with-prefix-input"
        value={value ?? ''}
        onChange={e => onChange?.(e.target.value)}
        {...props}
      />
    </div>
  )
}