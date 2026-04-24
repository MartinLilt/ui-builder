import React from 'react'

export type CardMediaPosition = 'top' | 'bottom'

export interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  mediaPosition?: CardMediaPosition
  children?: React.ReactNode
}

export function CardMedia({ mediaPosition = 'top', children, className, ...props }: CardMediaProps) {
  return (
    <div
      data-media-position={mediaPosition}
      className={[
        'promptui-card-media',
        `promptui-card-media--${mediaPosition}`,
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface CardMediaImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function CardMediaImage({ className, alt = '', ...props }: CardMediaImageProps) {
  return (
    <img
      className={['promptui-card-media-image', className].filter(Boolean).join(' ')}
      alt={alt}
      {...props}
    />
  )
}