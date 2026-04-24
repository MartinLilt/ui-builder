import React from 'react'

export interface ScrollAreaDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function ScrollAreaDefault({ children, className, ...props }: ScrollAreaDefaultProps) {
  return (
    <div
      className={['promptui-scroll-area-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      <div className="promptui-scroll-area-viewport">{children}</div>
    </div>
  )
}

export function ScrollAreaViewport({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-scroll-area-viewport', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export interface ScrollBarProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
}

export function ScrollBar({ orientation = 'vertical', className, ...props }: ScrollBarProps) {
  return (
    <div
      data-orientation={orientation}
      className={['promptui-scroll-area-scrollbar', `promptui-scroll-area-scrollbar--${orientation}`, className].filter(Boolean).join(' ')}
      {...props}
    >
      <div className="promptui-scroll-area-thumb" />
    </div>
  )
}