import React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

export interface TooltipRichProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  delayDuration?: number
  children?: React.ReactNode
}

export function TooltipRich({ open, defaultOpen, onOpenChange, delayDuration, children }: TooltipRichProps) {
  return (
    <TooltipPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} delayDuration={delayDuration}>
      {children}
    </TooltipPrimitive.Root>
  )
}

export const TooltipRichTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>>(
  function TooltipRichTrigger({ className, ...props }, ref) {
    return (
      <TooltipPrimitive.Trigger
        ref={ref}
        className={['promptui-tooltip-rich-trigger', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const TooltipRichContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>>(
  function TooltipRichContent({ className, sideOffset = 6, ...props }, ref) {
    return (
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          ref={ref}
          sideOffset={sideOffset}
          className={['promptui-tooltip-rich-content', className].filter(Boolean).join(' ')}
          {...props}
        />
      </TooltipPrimitive.Portal>
    )
  }
)

export function TooltipRichTitle({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-tooltip-rich-title', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function TooltipRichDescription({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-tooltip-rich-description', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function TooltipRichActions({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-tooltip-rich-actions', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}