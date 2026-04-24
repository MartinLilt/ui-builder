import React from 'react'

export type SeparatorOrientation = 'horizontal' | 'vertical'
export type SeparatorVariant = 'default' | 'dashed' | 'dotted'

export interface SeparatorDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: SeparatorOrientation
  decorative?: boolean
  variant?: SeparatorVariant
}

export function SeparatorDefault({
  orientation = 'horizontal',
  decorative = true,
  variant = 'default',
  className,
  ...props
}: SeparatorDefaultProps) {
  return (
    <div
      role={decorative ? 'none' : 'separator'}
      aria-orientation={decorative ? undefined : orientation}
      data-variant={variant}
      className={[
        'promptui-separator-default',
        `promptui-separator-default--${orientation}`,
        `promptui-separator-default--${variant}`,
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    />
  )
}