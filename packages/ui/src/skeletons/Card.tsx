import React from 'react'

export interface SkeletonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Show a top media bar (image placeholder). */
  showMedia?: boolean
  /** Number of text lines below the media. */
  lines?: number
}

export function SkeletonCard({ showMedia = true, lines = 3, className, ...props }: SkeletonCardProps) {
  return (
    <div
      role="status"
      aria-busy="true"
      className={['promptui-skeleton-card', className].filter(Boolean).join(' ')}
      {...props}
    >
      {showMedia && <div className="promptui-skeleton-card-media" />}
      <div className="promptui-skeleton-card-body">
        {Array.from({ length: Math.max(1, lines) }).map((_, i) => (
          <span key={i} className="promptui-skeleton-card-line" />
        ))}
      </div>
    </div>
  )
}