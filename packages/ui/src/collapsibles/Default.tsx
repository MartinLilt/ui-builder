import React from 'react'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

export interface CollapsibleDefaultProps extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> {}

export const CollapsibleDefault = React.forwardRef<HTMLDivElement, CollapsibleDefaultProps>(
  function CollapsibleDefault({ className, ...props }, ref) {
    return (
      <CollapsiblePrimitive.Root
        ref={ref}
        className={['promptui-collapsible-default', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const CollapsibleTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>>(
  function CollapsibleTrigger({ className, ...props }, ref) {
    return (
      <CollapsiblePrimitive.Trigger
        ref={ref}
        className={['promptui-collapsible-trigger', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const CollapsibleContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>>(
  function CollapsibleContent({ className, ...props }, ref) {
    return (
      <CollapsiblePrimitive.Content
        ref={ref}
        className={['promptui-collapsible-content', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)