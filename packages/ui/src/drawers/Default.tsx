import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

export type DrawerSide = 'top' | 'bottom' | 'left' | 'right'

export interface DrawerDefaultProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  modal?: boolean
  children?: React.ReactNode
}

export function DrawerDefault({ open, defaultOpen, onOpenChange, modal, children }: DrawerDefaultProps) {
  return (
    <DialogPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} modal={modal}>
      {children}
    </DialogPrimitive.Root>
  )
}

export const DrawerTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>>(
  function DrawerTrigger({ className, ...props }, ref) {
    return (
      <DialogPrimitive.Trigger
        ref={ref}
        className={['promptui-drawer-trigger', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export interface DrawerContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  side?: DrawerSide
}

export const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>(
  function DrawerContent({ side = 'bottom', className, children, ...props }, ref) {
    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="promptui-dialog-overlay" />
        <DialogPrimitive.Content
          ref={ref}
          data-side={side}
          className={[
            'promptui-drawer-default',
            `promptui-drawer-default--${side}`,
            className,
          ].filter(Boolean).join(' ')}
          {...props}
        >
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    )
  }
)

export function DrawerHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-drawer-header', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function DrawerFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-drawer-footer', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export const DrawerTitle = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(
  function DrawerTitle({ className, ...props }, ref) {
    return (
      <DialogPrimitive.Title
        ref={ref}
        className={['promptui-drawer-title', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const DrawerDescription = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>(
  function DrawerDescription({ className, ...props }, ref) {
    return (
      <DialogPrimitive.Description
        ref={ref}
        className={['promptui-drawer-description', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const DrawerClose = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>>(
  function DrawerClose({ className, children, ...props }, ref) {
    return (
      <DialogPrimitive.Close
        ref={ref}
        aria-label="Close"
        className={['promptui-drawer-close', className].filter(Boolean).join(' ')}
        {...props}
      >
        {children ?? '×'}
      </DialogPrimitive.Close>
    )
  }
)