import React from 'react'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'

export interface ToggleGroupDefaultSingleProps extends Omit<React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>, 'type' | 'value' | 'defaultValue' | 'onValueChange'> {
  type?: 'single'
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

export interface ToggleGroupDefaultMultipleProps extends Omit<React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>, 'type' | 'value' | 'defaultValue' | 'onValueChange'> {
  type: 'multiple'
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
}

export type ToggleGroupDefaultProps = ToggleGroupDefaultSingleProps | ToggleGroupDefaultMultipleProps

export const ToggleGroupDefault = React.forwardRef<HTMLDivElement, ToggleGroupDefaultProps>(
  function ToggleGroupDefault(props, ref) {
    const { className } = props
    const baseClass = ['promptui-toggle-group-default', className].filter(Boolean).join(' ')

    if (props.type === 'multiple') {
      const { className: _c, ...rest } = props
      return <ToggleGroupPrimitive.Root ref={ref} className={baseClass} {...rest} />
    }
    const { className: _c, type = 'single', ...rest } = props as ToggleGroupDefaultSingleProps
    return <ToggleGroupPrimitive.Root ref={ref} type={type} className={baseClass} {...rest} />
  }
) as React.ForwardRefExoticComponent<ToggleGroupDefaultProps & React.RefAttributes<HTMLDivElement>>

export interface ToggleGroupItemProps extends React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> {}

export const ToggleGroupItem = React.forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  function ToggleGroupItem({ className, ...props }, ref) {
    return (
      <ToggleGroupPrimitive.Item
        ref={ref}
        className={['promptui-toggle-group-item', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)