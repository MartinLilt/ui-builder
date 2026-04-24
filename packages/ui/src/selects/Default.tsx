import React from 'react'

export interface SelectDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  onValueChange?: (value: string) => void
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

export function SelectDefault({ value, onValueChange: _onValueChange, open = false, onOpenChange: _onOpenChange, children, className, ...props }: SelectDefaultProps) {
  return (
    <div
      data-state={open ? 'open' : 'closed'}
      data-value={value}
      className={['promptui-select-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function SelectTrigger({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      role="combobox"
      className={['promptui-select-trigger', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  placeholder?: React.ReactNode
  children?: React.ReactNode
}

export function SelectValue({ placeholder, children, className, ...props }: SelectValueProps) {
  return (
    <span className={['promptui-select-value', className].filter(Boolean).join(' ')} {...props}>
      {children ?? placeholder}
    </span>
  )
}

export function SelectContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="listbox"
      className={['promptui-select-content', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  selected?: boolean
  disabled?: boolean
  children?: React.ReactNode
}

export function SelectItem({ value, selected = false, disabled, children, className, ...props }: SelectItemProps) {
  return (
    <div
      role="option"
      aria-selected={selected}
      aria-disabled={disabled || undefined}
      data-value={value}
      data-state={selected ? 'checked' : 'unchecked'}
      className={['promptui-select-item', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function SelectGroup({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div role="group" className={['promptui-select-group', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function SelectLabel({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-select-label', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function SelectSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="separator"
      className={['promptui-select-separator', className].filter(Boolean).join(' ')}
      {...props}
    />
  )
}