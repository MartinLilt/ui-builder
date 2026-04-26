import React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

export type SeparatorOrientation = 'horizontal' | 'vertical'
export type SeparatorVariant = 'default' | 'dashed' | 'dotted'

export interface SeparatorDefaultProps extends Omit<React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>, 'orientation'> {
  orientation?: SeparatorOrientation
  variant?: SeparatorVariant
}

export const SeparatorDefault = React.forwardRef<HTMLDivElement, SeparatorDefaultProps>(
  function SeparatorDefault({ orientation = 'horizontal', decorative = true, variant = 'default', className, ...props }, ref) {
    return (
      <SeparatorPrimitive.Root
        ref={ref}
        orientation={orientation}
        decorative={decorative}
        data-variant={variant}
        className={[
          'promptui-separator-default',
          `promptui-separator-default--${orientation}`,
          `promptui-separator-default--${variant}`,
          className,
        ].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)