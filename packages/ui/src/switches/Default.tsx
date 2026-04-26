import React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

export interface SwitchDefaultProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {}

export const SwitchDefault = React.forwardRef<HTMLButtonElement, SwitchDefaultProps>(
  function SwitchDefault({ className, ...props }, ref) {
    return (
      <SwitchPrimitive.Root
        ref={ref}
        className={['promptui-switch-default', className].filter(Boolean).join(' ')}
        {...props}
      >
        <SwitchPrimitive.Thumb className="promptui-switch-thumb" />
      </SwitchPrimitive.Root>
    )
  }
)
