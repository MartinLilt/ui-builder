import React from 'react'

export interface AspectRatioDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number
  children?: React.ReactNode
}

export function AspectRatioDefault({ ratio = 16 / 9, children, className, style, ...props }: AspectRatioDefaultProps) {
  return (
    <div
      className={['promptui-aspect-ratio-default', className].filter(Boolean).join(' ')}
      style={{ position: 'relative', width: '100%', paddingBottom: `${100 / ratio}%`, ...style }}
      {...props}
    >
      <div className="promptui-aspect-ratio-inner" style={{ position: 'absolute', inset: 0 }}>
        {children}
      </div>
    </div>
  )
}