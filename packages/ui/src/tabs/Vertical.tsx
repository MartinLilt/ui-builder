import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

export interface TabVerticalProps extends Omit<React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, 'orientation'> {}

export const TabVertical = React.forwardRef<HTMLDivElement, TabVerticalProps>(
  function TabVertical({ className, ...props }, ref) {
    return (
      <TabsPrimitive.Root
        ref={ref}
        orientation="vertical"
        className={['promptui-tab-vertical', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export interface TabVerticalListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {}

export const TabVerticalList = React.forwardRef<HTMLDivElement, TabVerticalListProps>(
  function TabVerticalList({ className, ...props }, ref) {
    return (
      <TabsPrimitive.List
        ref={ref}
        aria-orientation="vertical"
        className={['promptui-tab-vertical-list', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export interface TabVerticalPanelsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TabVerticalPanels = React.forwardRef<HTMLDivElement, TabVerticalPanelsProps>(
  function TabVerticalPanels({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={['promptui-tab-vertical-panels', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)