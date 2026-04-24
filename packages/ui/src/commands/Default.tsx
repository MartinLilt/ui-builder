import React from 'react'

export interface CommandDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function CommandDefault({ children, className, ...props }: CommandDefaultProps) {
  return (
    <div
      role="combobox"
      aria-expanded="true"
      className={['promptui-command-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface CommandInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string
  onValueChange?: (value: string) => void
}

export function CommandInput({ value, onValueChange, className, ...props }: CommandInputProps) {
  return (
    <input
      type="text"
      role="searchbox"
      className={['promptui-command-input', className].filter(Boolean).join(' ')}
      value={value ?? ''}
      onChange={e => onValueChange?.(e.target.value)}
      {...props}
    />
  )
}

export function CommandList({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="listbox"
      className={['promptui-command-list', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function CommandEmpty({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-command-empty', className].filter(Boolean).join(' ')} {...props}>
      {children ?? 'No results.'}
    </div>
  )
}

export interface CommandGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: React.ReactNode
  children?: React.ReactNode
}

export function CommandGroup({ heading, children, className, ...props }: CommandGroupProps) {
  return (
    <div
      role="group"
      className={['promptui-command-group', className].filter(Boolean).join(' ')}
      {...props}
    >
      {heading && <div className="promptui-command-group-heading">{heading}</div>}
      {children}
    </div>
  )
}

export interface CommandItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  selected?: boolean
  children?: React.ReactNode
}

export function CommandItem({ value, selected = false, children, className, ...props }: CommandItemProps) {
  return (
    <div
      role="option"
      data-value={value}
      data-selected={selected || undefined}
      aria-selected={selected}
      className={['promptui-command-item', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function CommandSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="separator"
      className={['promptui-command-separator', className].filter(Boolean).join(' ')}
      {...props}
    />
  )
}