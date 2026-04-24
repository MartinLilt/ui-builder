import React from 'react'
import type { ChartDatum } from './Bar'

export interface ChartLineProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: ChartDatum[]
  width?: number
  height?: number
  showPoints?: boolean
}

export function ChartLine({ data = [], width = 320, height = 160, showPoints = true, className, ...props }: ChartLineProps) {
  const padding = 16
  const innerW = width - padding * 2
  const innerH = height - padding * 2
  const max = data.length ? Math.max(1, ...data.map(d => d.value)) : 1
  const min = data.length ? Math.min(0, ...data.map(d => d.value)) : 0
  const range = Math.max(1, max - min)
  const stepX = data.length > 1 ? innerW / (data.length - 1) : 0

  const points = data.map((d, i) => {
    const x = padding + i * stepX
    const y = padding + innerH - ((d.value - min) / range) * innerH
    return { x, y, d }
  })

  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')

  return (
    <div className={['promptui-chart-line', className].filter(Boolean).join(' ')} {...props}>
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} role="img">
        <path className="promptui-chart-line-path" d={path} fill="none" />
        {showPoints && points.map((p, i) => (
          <circle
            key={i}
            className="promptui-chart-line-point"
            cx={p.x}
            cy={p.y}
            r={3}
            data-label={p.d.label}
          >
            <title>{`${p.d.label}: ${p.d.value}`}</title>
          </circle>
        ))}
      </svg>
    </div>
  )
}