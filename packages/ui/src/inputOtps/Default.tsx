import React from 'react'

export interface InputOtpDefaultProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value?: string
  maxLength?: number
  onChange?: (value: string) => void
  children?: React.ReactNode
}

export function InputOtpDefault({ value, maxLength = 6, onChange, className, children, ...props }: InputOtpDefaultProps) {
  return (
    <div className={['promptui-input-otp-default', className].filter(Boolean).join(' ')}>
      <input
        type="text"
        inputMode="numeric"
        autoComplete="one-time-code"
        maxLength={maxLength}
        className="promptui-input-otp-input"
        value={value ?? ''}
        onChange={e => onChange?.(e.target.value)}
        {...props}
      />
      {children}
    </div>
  )
}

export function InputOtpGroup({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-input-otp-group', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export interface InputOtpSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  char?: string
  hasFocus?: boolean
}

export function InputOtpSlot({ char, hasFocus, className, ...props }: InputOtpSlotProps) {
  return (
    <div
      data-active={hasFocus || undefined}
      className={['promptui-input-otp-slot', className].filter(Boolean).join(' ')}
      {...props}
    >
      {char ?? ''}
    </div>
  )
}

export function InputOtpSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="separator"
      className={['promptui-input-otp-separator', className].filter(Boolean).join(' ')}
      {...props}
    >
      -
    </div>
  )
}