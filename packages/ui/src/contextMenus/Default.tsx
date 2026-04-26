import React from 'react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'

export interface ContextMenuDefaultProps {
  modal?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

export function ContextMenuDefault({ modal, onOpenChange, children }: ContextMenuDefaultProps) {
  return (
    <ContextMenuPrimitive.Root modal={modal} onOpenChange={onOpenChange}>
      {children}
    </ContextMenuPrimitive.Root>
  )
}

export const ContextMenuTrigger = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Trigger>>(
  function ContextMenuTrigger({ className, ...props }, ref) {
    return (
      <ContextMenuPrimitive.Trigger
        ref={ref}
        className={['promptui-context-menu-trigger', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const ContextMenuContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>>(
  function ContextMenuContent({ className, ...props }, ref) {
    return (
      <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Content
          ref={ref}
          className={['promptui-context-menu-content', className].filter(Boolean).join(' ')}
          {...props}
        />
      </ContextMenuPrimitive.Portal>
    )
  }
)

export const ContextMenuItem = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item>>(
  function ContextMenuItem({ className, ...props }, ref) {
    return (
      <ContextMenuPrimitive.Item
        ref={ref}
        className={['promptui-context-menu-item', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const ContextMenuSeparator = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>>(
  function ContextMenuSeparator({ className, ...props }, ref) {
    return (
      <ContextMenuPrimitive.Separator
        ref={ref}
        className={['promptui-context-menu-separator', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const ContextMenuLabel = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label>>(
  function ContextMenuLabel({ className, ...props }, ref) {
    return (
      <ContextMenuPrimitive.Label
        ref={ref}
        className={['promptui-context-menu-label', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const ContextMenuGroup = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Group>>(
  function ContextMenuGroup({ className, ...props }, ref) {
    return (
      <ContextMenuPrimitive.Group
        ref={ref}
        className={['promptui-context-menu-group', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)