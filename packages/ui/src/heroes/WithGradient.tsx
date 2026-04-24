import React from 'react'

export type HeroGradientPreset = 'sunset' | 'ocean' | 'forest' | 'midnight' | 'custom'

export interface HeroWithGradientProps extends React.HTMLAttributes<HTMLElement> {
  preset?: HeroGradientPreset
  children?: React.ReactNode
}

export function HeroWithGradient({ preset = 'sunset', children, className, ...props }: HeroWithGradientProps) {
  return (
    <section
      data-preset={preset}
      className={[
        'promptui-hero-with-gradient',
        `promptui-hero-with-gradient--${preset}`,
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      <div className="promptui-hero-with-gradient-inner">
        {children}
      </div>
    </section>
  )
}