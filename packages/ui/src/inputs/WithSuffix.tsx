import React from 'react'

export interface InputWithSuffixProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string
  onChange?: (value: string) => void
  suffix?: React.ReactNode
}

export function InputWithSuffix({
  suffix,
  value,
  onChange,
  className,
  type = 'text',
  ...props
}: InputWithSuffixProps) {
  return (
    <div className={['promptui-input-with-suffix', className].filter(Boolean).join(' ')}>
      <input
        type={type}
        className="promptui-input-with-suffix-input"
        value={value ?? ''}
        onChange={e => onChange?.(e.target.value)}
        {...props}
      />
      {suffix !== undefined && suffix !== null && (
        <span className="promptui-input-with-suffix-suffix">{suffix}</span>
      )}
    </div>
  )
}