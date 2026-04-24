import React from 'react'

export type CarouselOrientation = 'horizontal' | 'vertical'

export interface CarouselDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: CarouselOrientation
  children?: React.ReactNode
}

export function CarouselDefault({ orientation = 'horizontal', children, className, ...props }: CarouselDefaultProps) {
  return (
    <div
      role="region"
      aria-roledescription="carousel"
      data-orientation={orientation}
      className={['promptui-carousel-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function CarouselContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-carousel-content', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function CarouselItem({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={['promptui-carousel-item', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function CarouselPrevious({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      aria-label="Previous slide"
      className={['promptui-carousel-previous', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children ?? '‹'}
    </button>
  )
}

export function CarouselNext({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      aria-label="Next slide"
      className={['promptui-carousel-next', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children ?? '›'}
    </button>
  )
}