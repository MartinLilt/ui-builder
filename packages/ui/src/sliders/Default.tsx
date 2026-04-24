import React from 'react'

export interface SliderDefaultProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'value'> {
  value?: number
  min?: number
  max?: number
  step?: number
  onValueChange?: (value: number) => void
}

export function SliderDefault({ value, min = 0, max = 100, step = 1, onValueChange, className, ...props }: SliderDefaultProps) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value ?? min}
      onChange={e => onValueChange?.(Number(e.target.value))}
      className={['promptui-slider-default', className].filter(Boolean).join(' ')}
      {...props}
    />
  )
}