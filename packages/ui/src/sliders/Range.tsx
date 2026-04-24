import React from 'react'

export type SliderRangeValue = [number, number]

export interface SliderRangeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: SliderRangeValue
  onValueChange?: (value: SliderRangeValue) => void
  min?: number
  max?: number
  step?: number
}

export function SliderRange({
  value,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  className,
  ...props
}: SliderRangeProps) {
  const [from, to] = value ?? [min, max]

  const handleFrom = (next: number) => {
    onValueChange?.([Math.min(next, to), to])
  }
  const handleTo = (next: number) => {
    onValueChange?.([from, Math.max(next, from)])
  }

  return (
    <div
      className={['promptui-slider-range', className].filter(Boolean).join(' ')}
      data-from={from}
      data-to={to}
      {...props}
    >
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={from}
        onChange={e => handleFrom(Number(e.target.value))}
        className="promptui-slider-range-thumb promptui-slider-range-thumb--from"
        aria-label="Range start"
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={to}
        onChange={e => handleTo(Number(e.target.value))}
        className="promptui-slider-range-thumb promptui-slider-range-thumb--to"
        aria-label="Range end"
      />
    </div>
  )
}