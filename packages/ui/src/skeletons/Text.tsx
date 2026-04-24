import React from 'react'

export interface SkeletonTextProps extends React.HTMLAttributes<HTMLDivElement> {
  lines?: number
  /** Width of the last line as a CSS value (e.g. "60%"). Default shortens the last line. */
  lastLineWidth?: string
}

export function SkeletonText({ lines = 3, lastLineWidth = '60%', className, ...props }: SkeletonTextProps) {
  const count = Math.max(1, lines)
  return (
    <div
      role="status"
      aria-busy="true"
      className={['promptui-skeleton-text', className].filter(Boolean).join(' ')}
      {...props}
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="promptui-skeleton-text-line"
          style={i === count - 1 && count > 1 ? { width: lastLineWidth } : undefined}
        />
      ))}
    </div>
  )
}