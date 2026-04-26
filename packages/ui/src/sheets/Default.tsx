import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

export type SheetSide = 'top' | 'bottom' | 'left' | 'right'

export interface SheetDefaultProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  modal?: boolean
  children?: React.ReactNode
}

export function SheetDefault({ open, defaultOpen, onOpenChange, modal, children }: SheetDefaultProps) {
  return (
    <DialogPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} modal={modal}>
      {children}
    </DialogPrimitive.Root>
  )
}

export const SheetTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>>(
  function SheetTrigger({ className, ...props }, ref) {
    return (
      <DialogPrimitive.Trigger
        ref={ref}
        className={['promptui-sheet-trigger', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  side?: SheetSide
}

export const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  function SheetContent({ side = 'right', className, children, ...props }, ref) {
    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="promptui-dialog-overlay" />
        <DialogPrimitive.Content
          ref={ref}
          data-side={side}
          className={[
            'promptui-sheet-default',
            `promptui-sheet-default--${side}`,
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

export function SheetHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-sheet-header', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function SheetFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-sheet-footer', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export const SheetTitle = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(
  function SheetTitle({ className, ...props }, ref) {
    return (
      <DialogPrimitive.Title
        ref={ref}
        className={['promptui-sheet-title', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const SheetDescription = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>(
  function SheetDescription({ className, ...props }, ref) {
    return (
      <DialogPrimitive.Description
        ref={ref}
        className={['promptui-sheet-description', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const SheetClose = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>>(
  function SheetClose({ className, children, ...props }, ref) {
    return (
      <DialogPrimitive.Close
        ref={ref}
        aria-label="Close"
        className={['promptui-sheet-close', className].filter(Boolean).join(' ')}
        {...props}
      >
        {children ?? '×'}
      </DialogPrimitive.Close>
    )
  }
)