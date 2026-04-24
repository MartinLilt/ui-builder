import React from 'react'

export type AccordionType = 'single' | 'multiple'
export type AccordionVariant = 'default' | 'bordered' | 'separated'

export interface AccordionDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AccordionType
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  variant?: AccordionVariant
  children?: React.ReactNode
}

export function AccordionDefault({
  type = 'single',
  value,
  onValueChange: _onValueChange,
  variant = 'default',
  children,
  className,
  ...props
}: AccordionDefaultProps) {
  return (
    <div
      data-type={type}
      data-variant={variant}
      data-value={Array.isArray(value) ? value.join(',') : value}
      className={[
        'promptui-accordion-default',
        `promptui-accordion-default--${variant}`,
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  open?: boolean
  children?: React.ReactNode
}

export function AccordionItem({ value, open = false, children, className, ...props }: AccordionItemProps) {
  return (
    <div
      data-value={value}
      data-state={open ? 'open' : 'closed'}
      className={['promptui-accordion-item', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export function AccordionTrigger({ children, className, ...props }: AccordionTriggerProps) {
  return (
    <button
      type="button"
      className={['promptui-accordion-trigger', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function AccordionContent({ children, className, ...props }: AccordionContentProps) {
  return (
    <div
      role="region"
      className={['promptui-accordion-content', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}