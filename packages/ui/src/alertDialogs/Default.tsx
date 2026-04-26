import React from 'react'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

export interface AlertDialogDefaultProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

export function AlertDialogDefault({ open, defaultOpen, onOpenChange, children }: AlertDialogDefaultProps) {
  return (
    <AlertDialogPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {children}
    </AlertDialogPrimitive.Root>
  )
}

export const AlertDialogTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Trigger>>(
  function AlertDialogTrigger({ className, ...props }, ref) {
    return (
      <AlertDialogPrimitive.Trigger
        ref={ref}
        className={['promptui-alert-dialog-trigger', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export interface AlertDialogContentProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> {}

export const AlertDialogContent = React.forwardRef<HTMLDivElement, AlertDialogContentProps>(
  function AlertDialogContent({ className, children, ...props }, ref) {
    return (
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className="promptui-alert-dialog-overlay" />
        <AlertDialogPrimitive.Content
          ref={ref}
          className={['promptui-alert-dialog-default', className].filter(Boolean).join(' ')}
          {...props}
        >
          {children}
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    )
  }
)

export function AlertDialogHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-alert-dialog-header', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function AlertDialogFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-alert-dialog-footer', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export const AlertDialogTitle = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>>(
  function AlertDialogTitle({ className, ...props }, ref) {
    return (
      <AlertDialogPrimitive.Title
        ref={ref}
        className={['promptui-alert-dialog-title', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const AlertDialogDescription = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>>(
  function AlertDialogDescription({ className, ...props }, ref) {
    return (
      <AlertDialogPrimitive.Description
        ref={ref}
        className={['promptui-alert-dialog-description', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const AlertDialogAction = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>>(
  function AlertDialogAction({ className, ...props }, ref) {
    return (
      <AlertDialogPrimitive.Action
        ref={ref}
        className={['promptui-alert-dialog-action', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const AlertDialogCancel = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>>(
  function AlertDialogCancel({ className, ...props }, ref) {
    return (
      <AlertDialogPrimitive.Cancel
        ref={ref}
        className={['promptui-alert-dialog-cancel', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)