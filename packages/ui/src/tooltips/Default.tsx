import React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

export interface TooltipProviderProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider> {}

export function TooltipProvider(props: TooltipProviderProps) {
  return <TooltipPrimitive.Provider delayDuration={200} {...props} />
}

export interface TooltipDefaultProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  delayDuration?: number
  children?: React.ReactNode
}

export function TooltipDefault({ open, defaultOpen, onOpenChange, delayDuration, children }: TooltipDefaultProps) {
  return (
    <TooltipPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} delayDuration={delayDuration}>
      {children}
    </TooltipPrimitive.Root>
  )
}

export interface TooltipTriggerProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger> {}

export const TooltipTrigger = React.forwardRef<HTMLButtonElement, TooltipTriggerProps>(
  function TooltipTrigger({ className, ...props }, ref) {
    return (
      <TooltipPrimitive.Trigger
        ref={ref}
        className={['promptui-tooltip-trigger', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {}

export const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  function TooltipContent({ className, sideOffset = 4, ...props }, ref) {
    return (
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          ref={ref}
          sideOffset={sideOffset}
          className={['promptui-tooltip-content', className].filter(Boolean).join(' ')}
          {...props}
        />
      </TooltipPrimitive.Portal>
    )
  }
)