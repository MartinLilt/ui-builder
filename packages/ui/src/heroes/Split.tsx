import React from 'react'

export type HeroSplitSide = 'left' | 'right'

export interface HeroSplitProps extends React.HTMLAttributes<HTMLElement> {
  visualSide?: HeroSplitSide
  children?: React.ReactNode
}

export function HeroSplit({ visualSide = 'right', children, className, ...props }: HeroSplitProps) {
  return (
    <section
      data-visual-side={visualSide}
      className={[
        'promptui-hero-split',
        `promptui-hero-split--visual-${visualSide}`,
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </section>
  )
}

export function HeroSplitContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-hero-split-content', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function HeroSplitVisual({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-hero-split-visual', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}