import React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

export interface ScrollAreaDefaultProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {}

export const ScrollAreaDefault = React.forwardRef<HTMLDivElement, ScrollAreaDefaultProps>(
  function ScrollAreaDefault({ className, children, ...props }, ref) {
    return (
      <ScrollAreaPrimitive.Root
        ref={ref}
        className={['promptui-scroll-area-default', className].filter(Boolean).join(' ')}
        {...props}
      >
        <ScrollAreaPrimitive.Viewport className="promptui-scroll-area-viewport">
          {children}
        </ScrollAreaPrimitive.Viewport>
        <ScrollAreaPrimitive.Scrollbar
          orientation="vertical"
          className="promptui-scroll-area-scrollbar promptui-scroll-area-scrollbar--vertical"
        >
          <ScrollAreaPrimitive.Thumb className="promptui-scroll-area-thumb" />
        </ScrollAreaPrimitive.Scrollbar>
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    )
  }
)

export const ScrollAreaViewport = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Viewport>>(
  function ScrollAreaViewport({ className, ...props }, ref) {
    return (
      <ScrollAreaPrimitive.Viewport
        ref={ref}
        className={['promptui-scroll-area-viewport', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export interface ScrollBarProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar> {}

export const ScrollBar = React.forwardRef<HTMLDivElement, ScrollBarProps>(
  function ScrollBar({ className, orientation = 'vertical', ...props }, ref) {
    return (
      <ScrollAreaPrimitive.Scrollbar
        ref={ref}
        orientation={orientation}
        className={[
          'promptui-scroll-area-scrollbar',
          `promptui-scroll-area-scrollbar--${orientation}`,
          className,
        ].filter(Boolean).join(' ')}
        {...props}
      >
        <ScrollAreaPrimitive.Thumb className="promptui-scroll-area-thumb" />
      </ScrollAreaPrimitive.Scrollbar>
    )
  }
)