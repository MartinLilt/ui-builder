import React from 'react'

export interface CalendarMultipleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: Date[]
  onDayClick?: (day: Date) => void
  month?: Date
}

function monthMatrix(anchor: Date): Date[][] {
  const first = new Date(anchor.getFullYear(), anchor.getMonth(), 1)
  const startOffset = (first.getDay() + 6) % 7
  const start = new Date(first)
  start.setDate(1 - startOffset)
  const weeks: Date[][] = []
  for (let w = 0; w < 6; w++) {
    const week: Date[] = []
    for (let d = 0; d < 7; d++) {
      const cur = new Date(start)
      cur.setDate(start.getDate() + w * 7 + d)
      week.push(cur)
    }
    weeks.push(week)
  }
  return weeks
}

export function CalendarMultiple({ value, onDayClick, month, className, ...props }: CalendarMultipleProps) {
  const anchor = month ?? value?.[0] ?? new Date()
  const weeks = monthMatrix(anchor)
  const currentMonth = anchor.getMonth()
  const selectedSet = new Set((value ?? []).map(d => d.toDateString()))

  return (
    <div className={['promptui-calendar-multiple', className].filter(Boolean).join(' ')} {...props}>
      <div className="promptui-calendar-multiple-header">
        {anchor.toLocaleString(undefined, { month: 'long', year: 'numeric' })}
      </div>
      <div className="promptui-calendar-multiple-grid" role="grid">
        {weeks.map((week, wi) => (
          <div key={wi} className="promptui-calendar-multiple-row" role="row">
            {week.map((day, di) => {
              const outside = day.getMonth() !== currentMonth
              const selected = selectedSet.has(day.toDateString())
              return (
                <button
                  key={di}
                  type="button"
                  role="gridcell"
                  data-outside={outside || undefined}
                  aria-selected={selected || undefined}
                  className="promptui-calendar-multiple-day"
                  onClick={() => onDayClick?.(day)}
                >
                  {day.getDate()}
                </button>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}