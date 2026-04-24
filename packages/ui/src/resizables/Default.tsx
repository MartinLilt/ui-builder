import React from 'react'

export type ResizableDirection = 'horizontal' | 'vertical'

export interface ResizableDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: ResizableDirection
  children?: React.ReactNode
}

export function ResizableDefault({ direction = 'horizontal', children, className, ...props }: ResizableDefaultProps) {
  return (
    <div
      data-direction={direction}
      className={['promptui-resizable-default', `promptui-resizable-default--${direction}`, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface ResizablePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultSize?: number
  minSize?: number
  maxSize?: number
  children?: React.ReactNode
}

export function ResizablePanel({ defaultSize, minSize, maxSize, children, className, style, ...props }: ResizablePanelProps) {
  const flex = defaultSize !== undefined ? `${defaultSize} 1 0` : undefined
  return (
    <div
      className={['promptui-resizable-panel', className].filter(Boolean).join(' ')}
      style={{ flex, minWidth: minSize, maxWidth: maxSize, ...style }}
      {...props}
    >
      {children}
    </div>
  )
}

export interface ResizableHandleProps extends React.HTMLAttributes<HTMLDivElement> {
  withHandle?: boolean
}

export function ResizableHandle({ withHandle, className, ...props }: ResizableHandleProps) {
  return (
    <div
      role="separator"
      className={['promptui-resizable-handle', className].filter(Boolean).join(' ')}
      {...props}
    >
      {withHandle && <span className="promptui-resizable-handle-grip" aria-hidden="true" />}
    </div>
  )
}