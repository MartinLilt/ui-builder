import React from 'react'

export interface CalendarRangeValue {
  from?: Date
  to?: Date
}

export interface CalendarRangeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: CalendarRangeValue
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

function sameDay(a: Date, b: Date): boolean {
  return a.toDateString() === b.toDateString()
}

export function CalendarRange({ value, onDayClick, month, className, ...props }: CalendarRangeProps) {
  const anchor = month ?? value?.from ?? new Date()
  const weeks = monthMatrix(anchor)
  const currentMonth = anchor.getMonth()
  const from = value?.from
  const to = value?.to

  return (
    <div className={['promptui-calendar-range', className].filter(Boolean).join(' ')} {...props}>
      <div className="promptui-calendar-range-header">
        {anchor.toLocaleString(undefined, { month: 'long', year: 'numeric' })}
      </div>
      <div className="promptui-calendar-range-grid" role="grid">
        {weeks.map((week, wi) => (
          <div key={wi} className="promptui-calendar-range-row" role="row">
            {week.map((day, di) => {
              const outside = day.getMonth() !== currentMonth
              const isStart = from && sameDay(day, from)
              const isEnd = to && sameDay(day, to)
              const inRange = from && to && day > from && day < to
              return (
                <button
                  key={di}
                  type="button"
                  role="gridcell"
                  data-outside={outside || undefined}
                  data-range-start={isStart || undefined}
                  data-range-end={isEnd || undefined}
                  data-in-range={inRange || undefined}
                  aria-selected={isStart || isEnd || undefined}
                  className="promptui-calendar-range-day"
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