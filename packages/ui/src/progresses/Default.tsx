import React from 'react'

export interface ProgressDefaultProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'role'> {
  value?: number
  max?: number
}

export function ProgressDefault({ value = 0, max = 100, className, ...props }: ProgressDefaultProps) {
  const clamped = Math.max(0, Math.min(value, max))
  const pct = max > 0 ? (clamped / max) * 100 : 0
  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={max}
      className={['promptui-progress-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      <div
        className="promptui-progress-indicator"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}