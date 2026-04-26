import React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

export interface RadioGroupDefaultProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {}

export const RadioGroupDefault = React.forwardRef<HTMLDivElement, RadioGroupDefaultProps>(
  function RadioGroupDefault({ className, ...props }, ref) {
    return (
      <RadioGroupPrimitive.Root
        ref={ref}
        className={['promptui-radio-group-default', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export interface RadioGroupItemProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {}

export const RadioGroupItem = React.forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  function RadioGroupItem({ className, ...props }, ref) {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        className={['promptui-radio-group-item', className].filter(Boolean).join(' ')}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="promptui-radio-group-indicator" />
      </RadioGroupPrimitive.Item>
    )
  }
)