import React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'

export interface SelectDefaultProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {}

export function SelectDefault(props: SelectDefaultProps) {
  return <SelectPrimitive.Root {...props} />
}

export const SelectTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>>(
  function SelectTrigger({ className, children, ...props }, ref) {
    return (
      <SelectPrimitive.Trigger
        ref={ref}
        className={['promptui-select-trigger', className].filter(Boolean).join(' ')}
        {...props}
      >
        {children}
        <SelectPrimitive.Icon>▾</SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    )
  }
)

export const SelectValue = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>>(
  function SelectValue({ className, ...props }, ref) {
    return (
      <SelectPrimitive.Value
        ref={ref}
        className={['promptui-select-value', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const SelectContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>>(
  function SelectContent({ className, children, position = 'popper', ...props }, ref) {
    return (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          ref={ref}
          position={position}
          className={['promptui-select-content', className].filter(Boolean).join(' ')}
          {...props}
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    )
  }
)

export const SelectItem = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>>(
  function SelectItem({ className, children, ...props }, ref) {
    return (
      <SelectPrimitive.Item
        ref={ref}
        className={['promptui-select-item', className].filter(Boolean).join(' ')}
        {...props}
      >
        <SelectPrimitive.ItemIndicator className="promptui-select-item-indicator">✓</SelectPrimitive.ItemIndicator>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    )
  }
)

export const SelectGroup = SelectPrimitive.Group as unknown as React.FC<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group>>

export const SelectLabel = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>>(
  function SelectLabel({ className, ...props }, ref) {
    return (
      <SelectPrimitive.Label
        ref={ref}
        className={['promptui-select-label', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const SelectSeparator = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>>(
  function SelectSeparator({ className, ...props }, ref) {
    return (
      <SelectPrimitive.Separator
        ref={ref}
        className={['promptui-select-separator', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)