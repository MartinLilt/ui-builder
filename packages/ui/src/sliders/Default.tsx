import React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

export interface SliderDefaultProps extends Omit<React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'value' | 'defaultValue' | 'onValueChange'> {
  value?: number
  defaultValue?: number
  onValueChange?: (value: number) => void
}

export const SliderDefault = React.forwardRef<HTMLSpanElement, SliderDefaultProps>(
  function SliderDefault({ value, defaultValue, onValueChange, className, ...props }, ref) {
    return (
      <SliderPrimitive.Root
        ref={ref}
        value={value !== undefined ? [value] : undefined}
        defaultValue={defaultValue !== undefined ? [defaultValue] : undefined}
        onValueChange={onValueChange ? v => onValueChange(v[0]) : undefined}
        className={['promptui-slider-default', className].filter(Boolean).join(' ')}
        {...props}
      >
        <SliderPrimitive.Track className="promptui-slider-track">
          <SliderPrimitive.Range className="promptui-slider-range-fill" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="promptui-slider-thumb" />
      </SliderPrimitive.Root>
    )
  }
)