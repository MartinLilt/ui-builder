import React from 'react'

export interface SkeletonCircleProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: number | string
}

export function SkeletonCircle({ size = 40, className, style, ...props }: SkeletonCircleProps) {
  const sizeValue = typeof size === 'number' ? `${size}px` : size
  return (
    <span
      role="status"
      aria-busy="true"
      className={['promptui-skeleton-circle', className].filter(Boolean).join(' ')}
      style={{ width: sizeValue, height: sizeValue, borderRadius: '9999px', display: 'inline-block', ...style }}
      {...props}
    />
  )
}