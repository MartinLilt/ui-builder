import React from 'react'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'

export interface HoverCardDefaultProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  openDelay?: number
  closeDelay?: number
  children?: React.ReactNode
}

export function HoverCardDefault({ open, defaultOpen, onOpenChange, openDelay, closeDelay, children }: HoverCardDefaultProps) {
  return (
    <HoverCardPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      openDelay={openDelay}
      closeDelay={closeDelay}
    >
      {children}
    </HoverCardPrimitive.Root>
  )
}

export interface HoverCardTriggerProps extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger> {}

export const HoverCardTrigger = React.forwardRef<HTMLAnchorElement, HoverCardTriggerProps>(
  function HoverCardTrigger({ className, ...props }, ref) {
    return (
      <HoverCardPrimitive.Trigger
        ref={ref}
        className={['promptui-hover-card-trigger', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export interface HoverCardContentProps extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> {}

export const HoverCardContent = React.forwardRef<HTMLDivElement, HoverCardContentProps>(
  function HoverCardContent({ className, align = 'center', sideOffset = 6, ...props }, ref) {
    return (
      <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content
          ref={ref}
          align={align}
          sideOffset={sideOffset}
          className={['promptui-hover-card-content', className].filter(Boolean).join(' ')}
          {...props}
        />
      </HoverCardPrimitive.Portal>
    )
  }
)