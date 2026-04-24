import React from 'react'

export type SeparatorWithLabelAlign = 'start' | 'center' | 'end'

export interface SeparatorWithLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: SeparatorWithLabelAlign
  children?: React.ReactNode
}

export function SeparatorWithLabel({ align = 'center', children, className, ...props }: SeparatorWithLabelProps) {
  return (
    <div
      role="separator"
      data-align={align}
      className={[
        'promptui-separator-with-label',
        `promptui-separator-with-label--${align}`,
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      <span className="promptui-separator-with-label-line promptui-separator-with-label-line--before" aria-hidden="true" />
      <span className="promptui-separator-with-label-text">{children}</span>
      <span className="promptui-separator-with-label-line promptui-separator-with-label-line--after" aria-hidden="true" />
    </div>
  )
}