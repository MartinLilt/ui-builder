import React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

export interface PopoverDefaultProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  modal?: boolean
  children?: React.ReactNode
}

export function PopoverDefault({ open, defaultOpen, onOpenChange, modal, children }: PopoverDefaultProps) {
  return (
    <PopoverPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} modal={modal}>
      {children}
    </PopoverPrimitive.Root>
  )
}

export interface PopoverTriggerProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> {}

export const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  function PopoverTrigger({ className, ...props }, ref) {
    return (
      <PopoverPrimitive.Trigger
        ref={ref}
        className={['promptui-popover-trigger', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export interface PopoverContentProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {}

export const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  function PopoverContent({ className, align = 'center', sideOffset = 6, ...props }, ref) {
    return (
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          ref={ref}
          align={align}
          sideOffset={sideOffset}
          className={['promptui-popover-content', className].filter(Boolean).join(' ')}
          {...props}
        />
      </PopoverPrimitive.Portal>
    )
  }
)