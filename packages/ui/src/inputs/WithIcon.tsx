import React from 'react'

export type InputIconPosition = 'left' | 'right'

export interface InputWithIconProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string
  onChange?: (value: string) => void
  icon?: React.ReactNode
  iconPosition?: InputIconPosition
}

export function InputWithIcon({
  icon,
  iconPosition = 'left',
  value,
  onChange,
  className,
  type = 'text',
  ...props
}: InputWithIconProps) {
  return (
    <div
      data-icon-position={iconPosition}
      className={[
        'promptui-input-with-icon',
        `promptui-input-with-icon--${iconPosition}`,
        className,
      ].filter(Boolean).join(' ')}
    >
      {iconPosition === 'left' && icon && (
        <span className="promptui-input-with-icon-icon" aria-hidden="true">{icon}</span>
      )}
      <input
        type={type}
        className="promptui-input-with-icon-input"
        value={value ?? ''}
        onChange={e => onChange?.(e.target.value)}
        {...props}
      />
      {iconPosition === 'right' && icon && (
        <span className="promptui-input-with-icon-icon" aria-hidden="true">{icon}</span>
      )}
    </div>
  )
}