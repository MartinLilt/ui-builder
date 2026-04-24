import React from 'react'

export interface InputFileProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  onFilesChange?: (files: FileList | null) => void
}

export function InputFile({ onFilesChange, className, ...props }: InputFileProps) {
  return (
    <input
      type="file"
      className={['promptui-input-file', className].filter(Boolean).join(' ')}
      onChange={e => onFilesChange?.(e.target.files)}
      {...props}
    />
  )
}