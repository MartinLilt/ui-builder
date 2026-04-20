import React from 'react'

export interface ButtonGhostProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export function ButtonGhost({ children, className, ...props }: ButtonGhostProps) {
  return (
    <button
      className={['promptui-btn-ghost', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}