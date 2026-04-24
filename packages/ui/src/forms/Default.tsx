import React from 'react'

export interface FormDefaultProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode
}

export function FormDefault({ children, className, ...props }: FormDefaultProps) {
  return (
    <form className={['promptui-form-default', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </form>
  )
}

export function FormItem({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-form-item', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function FormLabel({ children, className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={['promptui-form-label', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </label>
  )
}

export function FormControl({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-form-control', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function FormDescription({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={['promptui-form-description', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </p>
  )
}

export function FormMessage({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  if (!children) return null
  return (
    <p role="alert" className={['promptui-form-message', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </p>
  )
}