import type { Meta, StoryObj } from '@storybook/react'
import { TableDefault, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption } from '@getpromptui/ui'

const meta: Meta<typeof TableDefault> = {
  title: 'Generated/Tables/Default',
  component: TableDefault,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof TableDefault>

export const Default: Story = {
  render: () => (
    <TableDefault>
      <TableHeader />
      <TableBody>{'Text'}</TableBody>
      <TableFooter>{'Footer text'}</TableFooter>
      <TableRow>{'Text'}</TableRow>
      <TableHead>{'Text'}</TableHead>
      <TableCell>{'Text'}</TableCell>
      <TableCaption>{'Text'}</TableCaption>
    </TableDefault>
  ),
}
