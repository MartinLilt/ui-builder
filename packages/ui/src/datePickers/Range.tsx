import React from 'react'
import type { CalendarRangeValue } from '../calendars/Range'

export interface DatePickerRangeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: CalendarRangeValue
  open?: boolean
  onOpenChange?: (open: boolean) => void
  placeholder?: string
  children?: React.ReactNode
}

function fmt(d?: Date): string {
  return d ? d.toLocaleDateString() : ''
}

export function DatePickerRange({
  value,
  open = false,
  onOpenChange,
  placeholder,
  children,
  className,
  ...props
}: DatePickerRangeProps) {
  const from = fmt(value?.from)
  const to = fmt(value?.to)
  const label = from && to ? `${from} — ${to}` : from || to || placeholder || ''

  return (
    <div
      className={['promptui-date-picker-range', className].filter(Boolean).join(' ')}
      data-state={open ? 'open' : 'closed'}
      {...props}
    >
      <button
        type="button"
        className="promptui-date-picker-range-trigger"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => onOpenChange?.(!open)}
      >
        {label}
      </button>
      {open && <div className="promptui-date-picker-range-popover">{children}</div>}
    </div>
  )
}