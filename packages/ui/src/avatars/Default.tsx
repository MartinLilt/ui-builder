import React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

export interface AvatarDefaultProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {}

export const AvatarDefault = React.forwardRef<HTMLSpanElement, AvatarDefaultProps>(
  function AvatarDefault({ className, ...props }, ref) {
    return (
      <AvatarPrimitive.Root
        ref={ref}
        className={['promptui-avatar-default', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export interface AvatarImageProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {}

export const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  function AvatarImage({ className, alt = '', ...props }, ref) {
    return (
      <AvatarPrimitive.Image
        ref={ref}
        alt={alt}
        className={['promptui-avatar-image', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export interface AvatarFallbackProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {}

export const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  function AvatarFallback({ className, ...props }, ref) {
    return (
      <AvatarPrimitive.Fallback
        ref={ref}
        className={['promptui-avatar-fallback', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)