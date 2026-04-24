import React from 'react'

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum number of avatars to show inline; remainder collapses into AvatarGroupOverflow. */
  max?: number
  children?: React.ReactNode
}

export function AvatarGroup({ max, children, className, ...props }: AvatarGroupProps) {
  const items = React.Children.toArray(children)
  const visible = max !== undefined && items.length > max ? items.slice(0, max) : items
  const overflow = max !== undefined && items.length > max ? items.length - max : 0

  return (
    <div
      role="group"
      className={['promptui-avatar-group', className].filter(Boolean).join(' ')}
      {...props}
    >
      {visible}
      {overflow > 0 && <AvatarGroupOverflow count={overflow} />}
    </div>
  )
}

export interface AvatarGroupOverflowProps extends React.HTMLAttributes<HTMLSpanElement> {
  count: number
}

export function AvatarGroupOverflow({ count, className, ...props }: AvatarGroupOverflowProps) {
  return (
    <span
      className={['promptui-avatar-group-overflow', className].filter(Boolean).join(' ')}
      {...props}
    >
      +{count}
    </span>
  )
}