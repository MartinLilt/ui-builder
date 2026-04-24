import React from 'react'

export interface ProgressCircularProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'role'> {
  value?: number
  max?: number
  size?: number
  strokeWidth?: number
  showValue?: boolean
}

export function ProgressCircular({
  value = 0,
  max = 100,
  size = 64,
  strokeWidth = 6,
  showValue = false,
  className,
  ...props
}: ProgressCircularProps) {
  const clamped = Math.max(0, Math.min(value, max))
  const pct = max > 0 ? clamped / max : 0
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - pct)
  const cx = size / 2
  const cy = size / 2

  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={max}
      className={['promptui-progress-circular', className].filter(Boolean).join(' ')}
      style={{ position: 'relative', display: 'inline-block', width: size, height: size }}
      {...props}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="promptui-progress-circular-track"
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
        />
        <circle
          className="promptui-progress-circular-indicator"
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${cx} ${cy})`}
        />
      </svg>
      {showValue && (
        <span className="promptui-progress-circular-value" aria-hidden="true">
          {Math.round(pct * 100)}%
        </span>
      )}
    </div>
  )
}