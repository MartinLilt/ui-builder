import React from 'react'

export interface SkeletonDefaultProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SkeletonDefault({ className, ...props }: SkeletonDefaultProps) {
  return (
    <div
      className={['promptui-skeleton-default', className].filter(Boolean).join(' ')}
      {...props}
    />
  )
}