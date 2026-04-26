import React from 'react'
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'

export interface AspectRatioDefaultProps extends React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root> {}

export const AspectRatioDefault = React.forwardRef<HTMLDivElement, AspectRatioDefaultProps>(
  function AspectRatioDefault({ className, ratio = 16 / 9, ...props }, ref) {
    return (
      <AspectRatioPrimitive.Root
        ref={ref}
        ratio={ratio}
        className={['promptui-aspect-ratio-default', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)