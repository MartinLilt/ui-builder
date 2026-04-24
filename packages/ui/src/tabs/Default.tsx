import React from 'react'

export interface TabDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  onValueChange?: (value: string) => void
  children?: React.ReactNode
}

export function TabDefault({ value, onValueChange: _onValueChange, children, className, ...props }: TabDefaultProps) {
  return (
    <div
      data-value={value}
      className={['promptui-tab-default', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function TabList({ children, className, ...props }: TabListProps) {
  return (
    <div
      role="tablist"
      className={['promptui-tab-list', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface TabTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  active?: boolean
  children?: React.ReactNode
}

export function TabTrigger({ value, active = false, children, className, ...props }: TabTriggerProps) {
  return (
    <button
      type="button"
      role="tab"
      data-value={value}
      data-state={active ? 'active' : 'inactive'}
      aria-selected={active}
      className={['promptui-tab-trigger', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export interface TabContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  active?: boolean
  children?: React.ReactNode
}

export function TabContent({ value, active = false, children, className, ...props }: TabContentProps) {
  return (
    <div
      role="tabpanel"
      data-value={value}
      data-state={active ? 'active' : 'inactive'}
      hidden={!active}
      className={['promptui-tab-content', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}