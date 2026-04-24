import React from 'react'

export interface AvatarDefaultProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode
}

export function AvatarDefault({ children, className, ...props }: AvatarDefaultProps) {
  return (
    <span className={['promptui-avatar-default', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </span>
  )
}

export interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function AvatarImage({ className, alt = '', ...props }: AvatarImageProps) {
  return (
    <img
      className={['promptui-avatar-image', className].filter(Boolean).join(' ')}
      alt={alt}
      {...props}
    />
  )
}

export interface AvatarFallbackProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode
}

export function AvatarFallback({ children, className, ...props }: AvatarFallbackProps) {
  return (
    <span className={['promptui-avatar-fallback', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </span>
  )
}