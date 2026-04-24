import React from 'react'
import type { ChartDatum } from './Bar'

export interface ChartPieProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: ChartDatum[]
  size?: number
  /** Inner radius ratio (0 = pie, 0.5 = donut). */
  innerRadius?: number
}

function slicePath(cx: number, cy: number, r: number, rInner: number, start: number, end: number): string {
  const x0 = cx + r * Math.cos(start)
  const y0 = cy + r * Math.sin(start)
  const x1 = cx + r * Math.cos(end)
  const y1 = cy + r * Math.sin(end)
  const largeArc = end - start > Math.PI ? 1 : 0

  if (rInner <= 0) {
    return `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${largeArc} 1 ${x1} ${y1} Z`
  }
  const xi0 = cx + rInner * Math.cos(end)
  const yi0 = cy + rInner * Math.sin(end)
  const xi1 = cx + rInner * Math.cos(start)
  const yi1 = cy + rInner * Math.sin(start)
  return `M ${x0} ${y0} A ${r} ${r} 0 ${largeArc} 1 ${x1} ${y1} L ${xi0} ${yi0} A ${rInner} ${rInner} 0 ${largeArc} 0 ${xi1} ${yi1} Z`
}

export function ChartPie({ data = [], size = 160, innerRadius = 0, className, ...props }: ChartPieProps) {
  const total = data.reduce((acc, d) => acc + Math.max(0, d.value), 0)
  const cx = size / 2
  const cy = size / 2
  const r = size / 2 - 2
  const rInner = Math.max(0, Math.min(innerRadius, 0.95)) * r

  let cursor = -Math.PI / 2

  return (
    <div className={['promptui-chart-pie', className].filter(Boolean).join(' ')} {...props}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img">
        {data.map((d, i) => {
          const v = Math.max(0, d.value)
          if (total <= 0 || v <= 0) return null
          const sweep = (v / total) * Math.PI * 2
          const start = cursor
          const end = cursor + sweep
          cursor = end
          const path = slicePath(cx, cy, r, rInner, start, end)
          return (
            <path
              key={i}
              className="promptui-chart-pie-slice"
              d={path}
              data-label={d.label}
              style={{ ['--slice-index' as string]: i }}
            >
              <title>{`${d.label}: ${d.value}`}</title>
            </path>
          )
        })}
      </svg>
    </div>
  )
}