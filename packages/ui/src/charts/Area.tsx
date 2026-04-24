import React from 'react'
import type { ChartDatum } from './Bar'

export interface ChartAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: ChartDatum[]
  width?: number
  height?: number
}

export function ChartArea({ data = [], width = 320, height = 160, className, ...props }: ChartAreaProps) {
  const padding = 16
  const innerW = width - padding * 2
  const innerH = height - padding * 2
  const max = data.length ? Math.max(1, ...data.map(d => d.value)) : 1
  const min = data.length ? Math.min(0, ...data.map(d => d.value)) : 0
  const range = Math.max(1, max - min)
  const stepX = data.length > 1 ? innerW / (data.length - 1) : 0
  const baselineY = padding + innerH

  const points = data.map((d, i) => {
    const x = padding + i * stepX
    const y = padding + innerH - ((d.value - min) / range) * innerH
    return { x, y, d }
  })

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  const areaPath =
    points.length > 0
      ? `M ${points[0].x} ${baselineY} ${points.map(p => `L ${p.x} ${p.y}`).join(' ')} L ${points[points.length - 1].x} ${baselineY} Z`
      : ''

  return (
    <div className={['promptui-chart-area', className].filter(Boolean).join(' ')} {...props}>
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} role="img">
        {areaPath && <path className="promptui-chart-area-fill" d={areaPath} />}
        <path className="promptui-chart-area-line" d={linePath} fill="none" />
      </svg>
    </div>
  )
}