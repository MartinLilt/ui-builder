import React from 'react'

export interface TableDefaultProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode
}

export function TableDefault({ children, className, ...props }: TableDefaultProps) {
  return (
    <div className="promptui-table-wrapper">
      <table className={['promptui-table-default', className].filter(Boolean).join(' ')} {...props}>
        {children}
      </table>
    </div>
  )
}

export function TableHeader({ children, className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead className={['promptui-table-header', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </thead>
  )
}

export function TableBody({ children, className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody className={['promptui-table-body', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </tbody>
  )
}

export function TableFooter({ children, className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tfoot className={['promptui-table-footer', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </tfoot>
  )
}

export function TableRow({ children, className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr className={['promptui-table-row', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </tr>
  )
}

export function TableHead({ children, className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th className={['promptui-table-head', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </th>
  )
}

export function TableCell({ children, className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={['promptui-table-cell', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </td>
  )
}

export function TableCaption({ children, className, ...props }: React.HTMLAttributes<HTMLTableCaptionElement>) {
  return (
    <caption className={['promptui-table-caption', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </caption>
  )
}