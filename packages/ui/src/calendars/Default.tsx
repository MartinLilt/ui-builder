import React from 'react'

export interface CalendarDefaultProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: Date
  onChange?: (date: Date) => void
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

export function CalendarDefault({ value, onChange, month, className, ...props }: CalendarDefaultProps) {
  const anchor = month ?? value ?? new Date()
  const weeks = monthMatrix(anchor)
  const currentMonth = anchor.getMonth()

  return (
    <div className={['promptui-calendar-default', className].filter(Boolean).join(' ')} {...props}>
      <div className="promptui-calendar-header">
        {anchor.toLocaleString(undefined, { month: 'long', year: 'numeric' })}
      </div>
      <div className="promptui-calendar-grid" role="grid">
        {weeks.map((week, wi) => (
          <div key={wi} className="promptui-calendar-row" role="row">
            {week.map((day, di) => {
              const isCurrentMonth = day.getMonth() === currentMonth
              const isSelected = value && day.toDateString() === value.toDateString()
              return (
                <button
                  key={di}
                  type="button"
                  role="gridcell"
                  aria-selected={isSelected || undefined}
                  data-outside={!isCurrentMonth || undefined}
                  className="promptui-calendar-day"
                  onClick={() => onChange?.(day)}
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