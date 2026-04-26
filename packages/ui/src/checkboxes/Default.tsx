import React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

export interface CheckboxDefaultProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {}

export const CheckboxDefault = React.forwardRef<HTMLButtonElement, CheckboxDefaultProps>(
  function CheckboxDefault({ className, ...props }, ref) {
    return (
      <CheckboxPrimitive.Root
        ref={ref}
        className={['promptui-checkbox-default', className].filter(Boolean).join(' ')}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="promptui-checkbox-indicator">✓</CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    )
  }
)