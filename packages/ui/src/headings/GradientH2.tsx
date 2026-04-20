import React from 'react'

export interface GradientH2Props {
  children?: React.ReactNode
  className?: string
}

export function GradientH2({ children, className }: GradientH2Props) {
  return (
    <h2 className={['promptui-gradient-h2', className].filter(Boolean).join(' ')}>
      {children}
    </h2>
  )
}