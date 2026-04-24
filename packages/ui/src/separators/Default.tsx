import React from 'react'

export type SeparatorOrientation = 'horizontal' | 'vertical'

export interface SeparatorDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: SeparatorOrientation
  decorative?: boolean
}

export function SeparatorDefault({ orientation = 'horizontal', decorative = true, className, ...props }: SeparatorDefaultProps) {
  return (
    <div
      role={decorative ? 'none' : 'separator'}
      aria-orientation={decorative ? undefined : orientation}
      className={['promptui-separator-default', `promptui-separator-default--${orientation}`, className].filter(Boolean).join(' ')}
      {...props}
    />
  )
}