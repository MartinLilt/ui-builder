import React from 'react'

export interface ButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export function ButtonPrimary({ children, className, ...props }: ButtonPrimaryProps) {
  return (
    <button
      className={['promptui-btn-primary', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}