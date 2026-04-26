import React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'

export interface ToggleDefaultProps extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> {}

export const ToggleDefault = React.forwardRef<HTMLButtonElement, ToggleDefaultProps>(
  function ToggleDefault({ className, ...props }, ref) {
    return (
      <TogglePrimitive.Root
        ref={ref}
        className={['promptui-toggle-default', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)
