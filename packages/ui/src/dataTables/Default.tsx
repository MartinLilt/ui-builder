import React from 'react'

export interface DataTableColumn<T> {
  key: string
  header: React.ReactNode
  cell?: (row: T) => React.ReactNode
}

export interface DataTableDefaultProps<T> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  columns: DataTableColumn<T>[]
  data: T[]
  empty?: React.ReactNode
}

export function DataTableDefault<T>({ columns, data, empty, className, ...props }: DataTableDefaultProps<T>) {
  return (
    <div className={['promptui-data-table-default', className].filter(Boolean).join(' ')} {...props}>
      <table className="promptui-data-table-table">
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.key} className="promptui-data-table-head">{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="promptui-data-table-empty">
                {empty ?? 'No results'}
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr key={i} className="promptui-data-table-row">
                {columns.map(col => (
                  <td key={col.key} className="promptui-data-table-cell">
                    {col.cell ? col.cell(row) : String((row as Record<string, unknown>)[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}