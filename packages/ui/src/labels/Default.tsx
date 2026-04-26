import React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

export interface LabelDefaultProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {}

export const LabelDefault = React.forwardRef<HTMLLabelElement, LabelDefaultProps>(
  function LabelDefault({ className, ...props }, ref) {
    return (
      <LabelPrimitive.Root
        ref={ref}
        className={['promptui-label-default', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)