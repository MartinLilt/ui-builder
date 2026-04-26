import React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

export interface DropdownMenuDefaultProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  modal?: boolean
  children?: React.ReactNode
}

export function DropdownMenuDefault({ open, defaultOpen, onOpenChange, modal, children }: DropdownMenuDefaultProps) {
  return (
    <DropdownMenuPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} modal={modal}>
      {children}
    </DropdownMenuPrimitive.Root>
  )
}

export const DropdownMenuTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>>(
  function DropdownMenuTrigger({ className, ...props }, ref) {
    return (
      <DropdownMenuPrimitive.Trigger
        ref={ref}
        className={['promptui-dropdown-menu-trigger', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const DropdownMenuContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>>(
  function DropdownMenuContent({ className, sideOffset = 4, ...props }, ref) {
    return (
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          ref={ref}
          sideOffset={sideOffset}
          className={['promptui-dropdown-menu-content', className].filter(Boolean).join(' ')}
          {...props}
        />
      </DropdownMenuPrimitive.Portal>
    )
  }
)

export const DropdownMenuItem = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>>(
  function DropdownMenuItem({ className, ...props }, ref) {
    return (
      <DropdownMenuPrimitive.Item
        ref={ref}
        className={['promptui-dropdown-menu-item', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const DropdownMenuLabel = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>>(
  function DropdownMenuLabel({ className, ...props }, ref) {
    return (
      <DropdownMenuPrimitive.Label
        ref={ref}
        className={['promptui-dropdown-menu-label', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const DropdownMenuSeparator = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>>(
  function DropdownMenuSeparator({ className, ...props }, ref) {
    return (
      <DropdownMenuPrimitive.Separator
        ref={ref}
        className={['promptui-dropdown-menu-separator', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const DropdownMenuGroup = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Group>>(
  function DropdownMenuGroup({ className, ...props }, ref) {
    return (
      <DropdownMenuPrimitive.Group
        ref={ref}
        className={['promptui-dropdown-menu-group', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const DropdownMenuCheckboxItem = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>>(
  function DropdownMenuCheckboxItem({ className, children, ...props }, ref) {
    return (
      <DropdownMenuPrimitive.CheckboxItem
        ref={ref}
        className={['promptui-dropdown-menu-checkbox-item', className].filter(Boolean).join(' ')}
        {...props}
      >
        <DropdownMenuPrimitive.ItemIndicator>✓</DropdownMenuPrimitive.ItemIndicator>
        {children}
      </DropdownMenuPrimitive.CheckboxItem>
    )
  }
)