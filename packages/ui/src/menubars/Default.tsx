import React from 'react'
import * as MenubarPrimitive from '@radix-ui/react-menubar'

export interface MenubarDefaultProps {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  loop?: boolean
  children?: React.ReactNode
  className?: string
}

export const MenubarDefault = React.forwardRef<HTMLDivElement, MenubarDefaultProps>(
  function MenubarDefault({ value, defaultValue, onValueChange, loop, children, className, ...props }, ref) {
    return (
      <MenubarPrimitive.Root
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        loop={loop}
        className={['promptui-menubar-default', className].filter(Boolean).join(' ')}
        {...props}
      >
        {children}
      </MenubarPrimitive.Root>
    )
  }
)

export interface MenubarMenuProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Menu> {}

export function MenubarMenu(props: MenubarMenuProps) {
  return <MenubarPrimitive.Menu {...props} />
}

export const MenubarTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>>(
  function MenubarTrigger({ className, ...props }, ref) {
    return (
      <MenubarPrimitive.Trigger
        ref={ref}
        className={['promptui-menubar-trigger', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const MenubarContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>>(
  function MenubarContent({ className, sideOffset = 4, ...props }, ref) {
    return (
      <MenubarPrimitive.Portal>
        <MenubarPrimitive.Content
          ref={ref}
          sideOffset={sideOffset}
          className={['promptui-menubar-content', className].filter(Boolean).join(' ')}
          {...props}
        />
      </MenubarPrimitive.Portal>
    )
  }
)

export interface MenubarItemProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> {
  disabled?: boolean
}

export const MenubarItem = React.forwardRef<HTMLDivElement, MenubarItemProps>(
  function MenubarItem({ className, ...props }, ref) {
    return (
      <MenubarPrimitive.Item
        ref={ref}
        className={['promptui-menubar-item', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const MenubarSeparator = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>>(
  function MenubarSeparator({ className, ...props }, ref) {
    return (
      <MenubarPrimitive.Separator
        ref={ref}
        className={['promptui-menubar-separator', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)