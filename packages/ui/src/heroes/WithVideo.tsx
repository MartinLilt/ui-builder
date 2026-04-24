import React from 'react'

export interface HeroWithVideoProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

export function HeroWithVideo({ children, className, ...props }: HeroWithVideoProps) {
  return (
    <section
      className={['promptui-hero-with-video', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </section>
  )
}

export interface HeroWithVideoBgProps extends React.VideoHTMLAttributes<HTMLVideoElement> {}

export function HeroWithVideoBg({ className, autoPlay = true, muted = true, loop = true, playsInline = true, ...props }: HeroWithVideoBgProps) {
  return (
    <video
      aria-hidden="true"
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      className={['promptui-hero-with-video-bg', className].filter(Boolean).join(' ')}
      {...props}
    />
  )
}

export function HeroWithVideoOverlay({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={['promptui-hero-with-video-overlay', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function HeroWithVideoContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-hero-with-video-content', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}