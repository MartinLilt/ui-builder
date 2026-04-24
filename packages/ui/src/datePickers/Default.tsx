import React from 'react'

export interface DatePickerDefaultProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: Date
  onChange?: (date: Date) => void
  open?: boolean
  onOpenChange?: (open: boolean) => void
  placeholder?: string
  children?: React.ReactNode
}

export function DatePickerDefault({
  value,
  onChange: _onChange,
  open = false,
  onOpenChange,
  placeholder,
  children,
  className,
  ...props
}: DatePickerDefaultProps) {
  return (
    <div className={['promptui-date-picker-default', className].filter(Boolean).join(' ')} data-state={open ? 'open' : 'closed'} {...props}>
      <button
        type="button"
        className="promptui-date-picker-trigger"
        aria-expanded={open}
        onClick={() => onOpenChange?.(!open)}
      >
        {value ? value.toLocaleDateString() : placeholder ?? ''}
      </button>
      {open && <div className="promptui-date-picker-popover">{children}</div>}
    </div>
  )
}