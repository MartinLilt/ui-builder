import React from 'react'

export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy'

export interface AvatarWithStatusProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode
}

export function AvatarWithStatus({ children, className, ...props }: AvatarWithStatusProps) {
  return (
    <span
      className={['promptui-avatar-with-status', className].filter(Boolean).join(' ')}
      style={{ position: 'relative', display: 'inline-block', ...props.style }}
      {...props}
    >
      {children}
    </span>
  )
}

export interface AvatarStatusDotProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: AvatarStatus
}

export function AvatarStatusDot({ status = 'offline', className, ...props }: AvatarStatusDotProps) {
  return (
    <span
      data-status={status}
      aria-label={`Status: ${status}`}
      className={[
        'promptui-avatar-status-dot',
        `promptui-avatar-status-dot--${status}`,
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    />
  )
}