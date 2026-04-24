import React from 'react'

export interface ComboboxOption {
  value: string
  label: string
}

export interface ComboboxDefaultProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string
  options?: ComboboxOption[]
  placeholder?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  onChange?: (value: string) => void
}

export function ComboboxDefault({
  value,
  options = [],
  placeholder,
  open = false,
  onOpenChange,
  onChange,
  className,
  ...props
}: ComboboxDefaultProps) {
  const selected = options.find(o => o.value === value)
  return (
    <div className={['promptui-combobox-default', className].filter(Boolean).join(' ')} data-state={open ? 'open' : 'closed'} {...props}>
      <button
        type="button"
        className="promptui-combobox-trigger"
        aria-expanded={open}
        onClick={() => onOpenChange?.(!open)}
      >
        {selected?.label ?? placeholder ?? ''}
      </button>
      {open && (
        <ul className="promptui-combobox-list" role="listbox">
          {options.map(opt => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              className="promptui-combobox-item"
              onClick={() => { onChange?.(opt.value); onOpenChange?.(false) }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}