import React from 'react'

export interface ChartDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  config?: Record<string, { label?: string; color?: string }>
  children?: React.ReactNode
}

export function ChartDefault({ config, children, className, style, ...props }: ChartDefaultProps) {
  const cssVars: Record<string, string> = {}
  if (config) {
    for (const [key, cfg] of Object.entries(config)) {
      if (cfg.color) cssVars[`--chart-${key}`] = cfg.color
    }
  }
  return (
    <div
      className={['promptui-chart-default', className].filter(Boolean).join(' ')}
      style={{ ...cssVars, ...style }}
      {...props}
    >
      {children}
    </div>
  )
}