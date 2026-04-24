import React from 'react'

export interface CheckboxDefaultProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

export function CheckboxDefault({ checked, onCheckedChange, className, ...props }: CheckboxDefaultProps) {
  return (
    <input
      type="checkbox"
      className={['promptui-checkbox-default', className].filter(Boolean).join(' ')}
      checked={checked ?? false}
      onChange={e => onCheckedChange?.(e.target.checked)}
      {...props}
    />
  )
}