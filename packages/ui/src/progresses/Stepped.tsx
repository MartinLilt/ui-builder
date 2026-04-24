import React from 'react'

export type ProgressStepState = 'complete' | 'active' | 'pending'

export interface ProgressSteppedProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'role'> {
  steps?: number
  current?: number
  labels?: React.ReactNode[]
}

export function ProgressStepped({ steps = 3, current = 0, labels, className, ...props }: ProgressSteppedProps) {
  const total = Math.max(1, steps)
  const active = Math.max(0, Math.min(current, total - 1))

  return (
    <div
      role="progressbar"
      aria-valuenow={active + 1}
      aria-valuemin={1}
      aria-valuemax={total}
      className={['promptui-progress-stepped', className].filter(Boolean).join(' ')}
      {...props}
    >
      {Array.from({ length: total }).map((_, i) => {
        const state: ProgressStepState = i < active ? 'complete' : i === active ? 'active' : 'pending'
        return (
          <div key={i} data-state={state} className="promptui-progress-stepped-step">
            <span className="promptui-progress-stepped-marker" aria-hidden="true">{i + 1}</span>
            {labels && labels[i] !== undefined && (
              <span className="promptui-progress-stepped-label">{labels[i]}</span>
            )}
          </div>
        )
      })}
    </div>
  )
}