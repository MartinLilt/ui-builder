import React from 'react'

export interface ResultTextProps {
  value?: unknown
  className?: string
}

export function ResultText({ value, className }: ResultTextProps) {
  return (
    <div className={['promptui-result-text', className].filter(Boolean).join(' ')}>
      {value !== undefined && value !== null ? String(value) : null}
    </div>
  )
}