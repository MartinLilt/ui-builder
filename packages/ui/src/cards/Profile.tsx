import React from 'react'

export interface CardProfileProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function CardProfile({ children, className, ...props }: CardProfileProps) {
  return (
    <div className={['promptui-card-profile', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export interface CardProfileAvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function CardProfileAvatar({ className, alt = '', ...props }: CardProfileAvatarProps) {
  return (
    <img
      className={['promptui-card-profile-avatar', className].filter(Boolean).join(' ')}
      alt={alt}
      {...props}
    />
  )
}

export function CardProfileName({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={['promptui-card-profile-name', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </h3>
  )
}

export function CardProfileRole({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={['promptui-card-profile-role', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </p>
  )
}

export function CardProfileBio({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={['promptui-card-profile-bio', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </p>
  )
}

export function CardProfileActions({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-card-profile-actions', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}