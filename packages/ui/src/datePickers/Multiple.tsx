import React from 'react'

export interface DatePickerMultipleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: Date[]
  open?: boolean
  onOpenChange?: (open: boolean) => void
  placeholder?: string
  children?: React.ReactNode
}

export function DatePickerMultiple({
  value,
  open = false,
  onOpenChange,
  placeholder,
  children,
  className,
  ...props
}: DatePickerMultipleProps) {
  const count = value?.length ?? 0
  const label =
    count === 0
      ? placeholder ?? ''
      : count === 1
        ? value![0].toLocaleDateString()
        : `${count} dates selected`

  return (
    <div
      className={['promptui-date-picker-multiple', className].filter(Boolean).join(' ')}
      data-state={open ? 'open' : 'closed'}
      {...props}
    >
      <button
        type="button"
        className="promptui-date-picker-multiple-trigger"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => onOpenChange?.(!open)}
      >
        {label}
      </button>
      {open && <div className="promptui-date-picker-multiple-popover">{children}</div>}
    </div>
  )
}