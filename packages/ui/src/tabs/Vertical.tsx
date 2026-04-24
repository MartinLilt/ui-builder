import React from 'react'

export interface TabVerticalProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  onValueChange?: (value: string) => void
  children?: React.ReactNode
}

export function TabVertical({ value, onValueChange: _onValueChange, children, className, ...props }: TabVerticalProps) {
  return (
    <div
      data-value={value}
      className={['promptui-tab-vertical', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface TabVerticalListProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function TabVerticalList({ children, className, ...props }: TabVerticalListProps) {
  return (
    <div
      role="tablist"
      aria-orientation="vertical"
      className={['promptui-tab-vertical-list', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export interface TabVerticalPanelsProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function TabVerticalPanels({ children, className, ...props }: TabVerticalPanelsProps) {
  return (
    <div className={['promptui-tab-vertical-panels', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}