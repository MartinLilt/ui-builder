import type { Meta, StoryObj } from '@storybook/react'
import { PaginationWithPageSize, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis, PaginationPageSize, PaginationPageSizeLabel, PaginationPageSizeSelect } from '@getpromptui/ui'

const meta: Meta<typeof PaginationWithPageSize> = {
  title: 'Generated/Paginations/WithPageSize',
  component: PaginationWithPageSize,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof PaginationWithPageSize>

export const Default: Story = {
  render: () => (
    <PaginationWithPageSize>
      <PaginationContent>{'Content goes here.'}</PaginationContent>
      <PaginationItem>{'Menu item'}</PaginationItem>
      <PaginationLink>{'Home'}</PaginationLink>
      <PaginationPrevious>{'Text'}</PaginationPrevious>
      <PaginationNext>{'Text'}</PaginationNext>
      <PaginationEllipsis />
      <PaginationPageSize>{'Text'}</PaginationPageSize>
      <PaginationPageSizeLabel>{'Label'}</PaginationPageSizeLabel>
      <PaginationPageSizeSelect>{'Text'}</PaginationPageSizeSelect>
    </PaginationWithPageSize>
  ),
}
