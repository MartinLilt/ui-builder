import React from 'react'

export type CardStatTrendDirection = 'up' | 'down' | 'neutral'

export interface CardStatProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function CardStat({ children, className, ...props }: CardStatProps) {
  return (
    <div className={['promptui-card-stat', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function CardStatLabel({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-card-stat-label', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function CardStatValue({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-card-stat-value', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export interface CardStatTrendProps extends React.HTMLAttributes<HTMLSpanElement> {
  direction?: CardStatTrendDirection
  delta?: React.ReactNode
  children?: React.ReactNode
}

export function CardStatTrend({ direction = 'neutral', delta, children, className, ...props }: CardStatTrendProps) {
  return (
    <span
      data-direction={direction}
      className={[
        'promptui-card-stat-trend',
        `promptui-card-stat-trend--${direction}`,
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {delta !== undefined && delta !== null ? delta : children}
    </span>
  )
}

export function CardStatDescription({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={['promptui-card-stat-description', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </p>
  )
}