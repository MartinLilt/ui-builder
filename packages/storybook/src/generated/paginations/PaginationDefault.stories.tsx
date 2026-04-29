import type { Meta, StoryObj } from '@storybook/react'
import { PaginationDefault, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from '@getpromptui/ui'

const meta: Meta<typeof PaginationDefault> = {
  title: 'Generated/Paginations/Default',
  component: PaginationDefault,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof PaginationDefault>

export const Default: Story = {
  render: () => (
    <PaginationDefault>
      <PaginationContent>{'Content goes here.'}</PaginationContent>
      <PaginationItem>{'Menu item'}</PaginationItem>
      <PaginationLink>{'Home'}</PaginationLink>
      <PaginationPrevious>{'Text'}</PaginationPrevious>
      <PaginationNext>{'Text'}</PaginationNext>
      <PaginationEllipsis />
    </PaginationDefault>
  ),
}
