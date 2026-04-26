import React from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'

export type ToastVariant = 'default' | 'destructive'

export interface ToastProviderProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Provider> {}

export function ToastProvider({ swipeDirection = 'right', ...props }: ToastProviderProps) {
  return <ToastPrimitive.Provider swipeDirection={swipeDirection} {...props} />
}

export interface ToastDefaultProps extends Omit<React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>, 'forceMount'> {
  variant?: ToastVariant
}

export const ToastDefault = React.forwardRef<HTMLLIElement, ToastDefaultProps>(
  function ToastDefault({ className, variant = 'default', ...props }, ref) {
    return (
      <ToastPrimitive.Root
        ref={ref}
        data-variant={variant}
        className={[
          'promptui-toast-default',
          `promptui-toast-default--${variant}`,
          className,
        ].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const ToastAction = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>>(
  function ToastAction({ className, altText = 'Action', ...props }, ref) {
    return (
      <ToastPrimitive.Action
        ref={ref}
        altText={altText}
        className={['promptui-toast-action', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const ToastClose = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>>(
  function ToastClose({ className, children, ...props }, ref) {
    return (
      <ToastPrimitive.Close
        ref={ref}
        className={['promptui-toast-close', className].filter(Boolean).join(' ')}
        {...props}
      >
        {children ?? '×'}
      </ToastPrimitive.Close>
    )
  }
)

export const ToastTitle = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>>(
  function ToastTitle({ className, ...props }, ref) {
    return (
      <ToastPrimitive.Title
        ref={ref}
        className={['promptui-toast-title', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const ToastDescription = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>>(
  function ToastDescription({ className, ...props }, ref) {
    return (
      <ToastPrimitive.Description
        ref={ref}
        className={['promptui-toast-description', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

export const ToastViewport = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>>(
  function ToastViewport({ className, ...props }, ref) {
    return (
      <ToastPrimitive.Viewport
        ref={ref}
        className={['promptui-toast-viewport', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)