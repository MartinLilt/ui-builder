import React from 'react'

export type SonnerPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'

export interface SonnerDefaultProps extends React.HTMLAttributes<HTMLOListElement> {
  position?: SonnerPosition
  children?: React.ReactNode
}

export function SonnerDefault({ position = 'bottom-right', children, className, ...props }: SonnerDefaultProps) {
  return (
    <ol
      className={['promptui-sonner-default', `promptui-sonner-default--${position}`, className].filter(Boolean).join(' ')}
      data-position={position}
      {...props}
    >
      {children}
    </ol>
  )
}