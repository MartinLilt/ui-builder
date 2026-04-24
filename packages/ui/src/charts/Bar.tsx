import React from 'react'

export interface ChartDatum {
  label: string
  value: number
}

export interface ChartBarProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: ChartDatum[]
  width?: number
  height?: number
  gap?: number
}

export function ChartBar({ data = [], width = 320, height = 160, gap = 4, className, ...props }: ChartBarProps) {
  const max = data.length ? Math.max(1, ...data.map(d => d.value)) : 1
  const padding = 16
  const innerW = width - padding * 2
  const innerH = height - padding * 2
  const slot = data.length > 0 ? innerW / data.length : 0
  const barWidth = Math.max(0, slot - gap)

  return (
    <div className={['promptui-chart-bar', className].filter(Boolean).join(' ')} {...props}>
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} role="img">
        {data.map((d, i) => {
          const h = max > 0 ? (d.value / max) * innerH : 0
          const x = padding + i * slot + gap / 2
          const y = padding + innerH - h
          return (
            <rect
              key={i}
              className="promptui-chart-bar-bar"
              x={x}
              y={y}
              width={barWidth}
              height={h}
              data-label={d.label}
            >
              <title>{`${d.label}: ${d.value}`}</title>
            </rect>
          )
        })}
      </svg>
    </div>
  )
}