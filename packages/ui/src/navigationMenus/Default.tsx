import React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'

export interface NavigationMenuDefaultProps {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  delayDuration?: number
  skipDelayDuration?: number
  orientation?: 'horizontal' | 'vertical'
  children?: React.ReactNode
  className?: string
}

export const NavigationMenuDefault = React.forwardRef<HTMLElement, NavigationMenuDefaultProps>(
  function NavigationMenuDefault({ value, defaultValue, onValueChange, delayDuration, skipDelayDuration, orientation, children, className, ...props }, ref) {
    return (
      <NavigationMenuPrimitive.Root
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        delayDuration={delayDuration}
        skipDelayDuration={skipDelayDuration}
        orientation={orientation}
        className={['promptui-navigation-menu-default', className].filter(Boolean).join(' ')}
        {...props}
      >
        {children}
      </NavigationMenuPrimitive.Root>
    )
  }
)

export const NavigationMenuList = React.forwardRef<HTMLUListElement, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>>(
  function NavigationMenuList({ className, ...props }, ref) {
    return (
      <NavigationMenuPrimitive.List
        ref={ref}
        className={['promptui-navigation-menu-list', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const NavigationMenuItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>>(
  function NavigationMenuItem({ className, ...props }, ref) {
    return (
      <NavigationMenuPrimitive.Item
        ref={ref}
        className={['promptui-navigation-menu-item', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const NavigationMenuTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>>(
  function NavigationMenuTrigger({ className, ...props }, ref) {
    return (
      <NavigationMenuPrimitive.Trigger
        ref={ref}
        className={['promptui-navigation-menu-trigger', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const NavigationMenuContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>>(
  function NavigationMenuContent({ className, ...props }, ref) {
    return (
      <NavigationMenuPrimitive.Content
        ref={ref}
        className={['promptui-navigation-menu-content', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const NavigationMenuLink = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>>(
  function NavigationMenuLink({ className, ...props }, ref) {
    return (
      <NavigationMenuPrimitive.Link
        ref={ref}
        className={['promptui-navigation-menu-link', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)