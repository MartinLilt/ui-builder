import React from 'react'
import type { ComboboxOption } from './Default'

export interface ComboboxMultiProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string[]
  options?: ComboboxOption[]
  placeholder?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  onChange?: (value: string[]) => void
}

export function ComboboxMulti({
  value = [],
  options = [],
  placeholder,
  open = false,
  onOpenChange,
  onChange,
  className,
  ...props
}: ComboboxMultiProps) {
  const toggle = (v: string) => {
    if (value.includes(v)) onChange?.(value.filter(x => x !== v))
    else onChange?.([...value, v])
  }

  const selectedLabel =
    value.length === 0
      ? placeholder ?? ''
      : value.length === 1
        ? options.find(o => o.value === value[0])?.label ?? ''
        : `${value.length} selected`

  return (
    <div
      className={['promptui-combobox-multi', className].filter(Boolean).join(' ')}
      data-state={open ? 'open' : 'closed'}
      {...props}
    >
      <button
        type="button"
        className="promptui-combobox-multi-trigger"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => onOpenChange?.(!open)}
      >
        {selectedLabel}
      </button>
      {open && (
        <ul className="promptui-combobox-multi-list" role="listbox" aria-multiselectable="true">
          {options.map(opt => {
            const selected = value.includes(opt.value)
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={selected}
                data-selected={selected || undefined}
                className="promptui-combobox-multi-item"
                onClick={() => toggle(opt.value)}
              >
                {opt.label}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}