import React from 'react'

export interface ChartRadarDatum {
  axis: string
  value: number
}

export interface ChartRadarProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: ChartRadarDatum[]
  size?: number
  max?: number
  /** Number of concentric grid rings to draw. */
  rings?: number
}

export function ChartRadar({ data = [], size = 200, max, rings = 4, className, ...props }: ChartRadarProps) {
  const cx = size / 2
  const cy = size / 2
  const r = size / 2 - 8
  const resolvedMax = max ?? (data.length ? Math.max(1, ...data.map(d => d.value)) : 1)
  const count = data.length

  const axisPoint = (i: number, ratio: number) => {
    const angle = -Math.PI / 2 + (i / count) * Math.PI * 2
    return { x: cx + r * ratio * Math.cos(angle), y: cy + r * ratio * Math.sin(angle) }
  }

  const ringPath = (ratio: number) => {
    if (count === 0) return ''
    return Array.from({ length: count })
      .map((_, i) => {
        const p = axisPoint(i, ratio)
        return `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
      })
      .concat('Z')
      .join(' ')
  }

  const dataPath =
    count > 0
      ? data
          .map((d, i) => {
            const ratio = resolvedMax > 0 ? Math.max(0, Math.min(d.value, resolvedMax)) / resolvedMax : 0
            const p = axisPoint(i, ratio)
            return `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
          })
          .concat('Z')
          .join(' ')
      : ''

  return (
    <div className={['promptui-chart-radar', className].filter(Boolean).join(' ')} {...props}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img">
        {Array.from({ length: rings }).map((_, ri) => (
          <path
            key={ri}
            className="promptui-chart-radar-ring"
            d={ringPath((ri + 1) / rings)}
            fill="none"
          />
        ))}
        {data.map((_, i) => {
          const p = axisPoint(i, 1)
          return <line key={i} className="promptui-chart-radar-axis" x1={cx} y1={cy} x2={p.x} y2={p.y} />
        })}
        {dataPath && <path className="promptui-chart-radar-area" d={dataPath} />}
      </svg>
    </div>
  )
}