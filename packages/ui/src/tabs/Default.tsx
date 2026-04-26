import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

export type TabVariant = 'default' | 'pills' | 'boxed'

export interface TabDefaultProps extends Omit<React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, 'orientation'> {
  variant?: TabVariant
}

export const TabDefault = React.forwardRef<HTMLDivElement, TabDefaultProps>(
  function TabDefault({ variant = 'default', className, ...props }, ref) {
    return (
      <TabsPrimitive.Root
        ref={ref}
        data-variant={variant}
        className={[
          'promptui-tab-default',
          `promptui-tab-default--${variant}`,
          className,
        ].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export interface TabListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {}

export const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  function TabList({ className, ...props }, ref) {
    return (
      <TabsPrimitive.List
        ref={ref}
        className={['promptui-tab-list', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export interface TabTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {}

export const TabTrigger = React.forwardRef<HTMLButtonElement, TabTriggerProps>(
  function TabTrigger({ className, ...props }, ref) {
    return (
      <TabsPrimitive.Trigger
        ref={ref}
        className={['promptui-tab-trigger', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export interface TabContentProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {}

export const TabContent = React.forwardRef<HTMLDivElement, TabContentProps>(
  function TabContent({ className, ...props }, ref) {
    return (
      <TabsPrimitive.Content
        ref={ref}
        className={['promptui-tab-content', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)