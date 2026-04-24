import React from 'react'

export interface PaginationWithPageSizeProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

export function PaginationWithPageSize({ children, className, ...props }: PaginationWithPageSizeProps) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={['promptui-pagination-with-page-size', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </nav>
  )
}

export function PaginationPageSize({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-pagination-page-size', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function PaginationPageSizeLabel({ children, className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={['promptui-pagination-page-size-label', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </label>
  )
}

export interface PaginationPageSizeSelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  value?: number
  onValueChange?: (value: number) => void
  sizes?: number[]
}

export function PaginationPageSizeSelect({
  value,
  onValueChange,
  sizes = [10, 20, 50, 100],
  className,
  ...props
}: PaginationPageSizeSelectProps) {
  return (
    <select
      className={['promptui-pagination-page-size-select', className].filter(Boolean).join(' ')}
      value={value ?? sizes[0]}
      onChange={e => onValueChange?.(Number(e.target.value))}
      {...props}
    >
      {sizes.map(s => (
        <option key={s} value={s}>{s}</option>
      ))}
    </select>
  )
}