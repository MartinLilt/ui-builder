import React from 'react'

export interface SwitchDefaultProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

export function SwitchDefault({ checked, onCheckedChange, className, ...props }: SwitchDefaultProps) {
  return (
    <label className={['promptui-switch-default', className].filter(Boolean).join(' ')}>
      <input
        type="checkbox"
        role="switch"
        className="promptui-switch-input"
        checked={checked ?? false}
        onChange={e => onCheckedChange?.(e.target.checked)}
        {...props}
      />
      <span className="promptui-switch-track" aria-hidden="true">
        <span className="promptui-switch-thumb" />
      </span>
    </label>
  )
}