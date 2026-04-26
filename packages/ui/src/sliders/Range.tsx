import React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

export type SliderRangeValue = [number, number]

export interface SliderRangeProps extends Omit<React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'value' | 'defaultValue' | 'onValueChange'> {
  value?: SliderRangeValue
  defaultValue?: SliderRangeValue
  onValueChange?: (value: SliderRangeValue) => void
}

export const SliderRange = React.forwardRef<HTMLSpanElement, SliderRangeProps>(
  function SliderRange({ value, defaultValue, onValueChange, className, min = 0, max = 100, step = 1, ...props }, ref) {
    return (
      <SliderPrimitive.Root
        ref={ref}
        min={min}
        max={max}
        step={step}
        value={value}
        defaultValue={defaultValue ?? [min, max]}
        onValueChange={onValueChange ? v => onValueChange([v[0], v[1]] as SliderRangeValue) : undefined}
        className={['promptui-slider-range', className].filter(Boolean).join(' ')}
        {...props}
      >
        <SliderPrimitive.Track className="promptui-slider-track">
          <SliderPrimitive.Range className="promptui-slider-range-fill" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="promptui-slider-thumb" aria-label="Range start" />
        <SliderPrimitive.Thumb className="promptui-slider-thumb" aria-label="Range end" />
      </SliderPrimitive.Root>
    )
  }
)
