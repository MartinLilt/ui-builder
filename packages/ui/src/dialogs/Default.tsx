import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

export type DialogVariant = 'default' | 'fullscreen' | 'compact'

export interface DialogDefaultProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  modal?: boolean
  children?: React.ReactNode
}

/**
 * Root. Wraps the whole dialog tree. Use `<DialogTrigger>` + `<DialogContent>` inside.
 * Open state can be controlled (`open` + `onOpenChange`) or uncontrolled (`defaultOpen`).
 */
export function DialogDefault({ open, defaultOpen, onOpenChange, modal, children }: DialogDefaultProps) {
  return (
    <DialogPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} modal={modal}>
      {children}
    </DialogPrimitive.Root>
  )
}

export interface DialogTriggerProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger> {}

export const DialogTrigger = React.forwardRef<HTMLButtonElement, DialogTriggerProps>(
  function DialogTrigger({ className, ...props }, ref) {
    return (
      <DialogPrimitive.Trigger
        ref={ref}
        className={['promptui-dialog-trigger', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  variant?: DialogVariant
  /** When true, hides the default overlay. */
  noOverlay?: boolean
}

export const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  function DialogContent({ variant = 'default', noOverlay, className, children, ...props }, ref) {
    return (
      <DialogPrimitive.Portal>
        {!noOverlay && <DialogPrimitive.Overlay className="promptui-dialog-overlay" />}
        <DialogPrimitive.Content
          ref={ref}
          data-variant={variant}
          className={[
            'promptui-dialog-default',
            `promptui-dialog-default--${variant}`,
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

export function DialogHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-dialog-header', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function DialogFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-dialog-footer', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export const DialogTitle = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(
  function DialogTitle({ className, ...props }, ref) {
    return (
      <DialogPrimitive.Title
        ref={ref}
        className={['promptui-dialog-title', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const DialogDescription = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>(
  function DialogDescription({ className, ...props }, ref) {
    return (
      <DialogPrimitive.Description
        ref={ref}
        className={['promptui-dialog-description', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const DialogClose = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>>(
  function DialogClose({ className, children, ...props }, ref) {
    return (
      <DialogPrimitive.Close
        ref={ref}
        aria-label="Close"
        className={['promptui-dialog-close', className].filter(Boolean).join(' ')}
        {...props}
      >
        {children ?? '×'}
      </DialogPrimitive.Close>
    )
  }
)