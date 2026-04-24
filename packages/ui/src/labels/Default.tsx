import React from 'react'

export interface LabelDefaultProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode
}

export function LabelDefault({ children, className, ...props }: LabelDefaultProps) {
  return (
    <label
      className={['promptui-label-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </label>
  )
}