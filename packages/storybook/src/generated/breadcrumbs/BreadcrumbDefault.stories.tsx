import type { Meta, StoryObj } from '@storybook/react'
import { BreadcrumbDefault, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis } from '@getpromptui/ui'

const meta: Meta<typeof BreadcrumbDefault> = {
  title: 'Generated/Breadcrumbs/Default',
  component: BreadcrumbDefault,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof BreadcrumbDefault>

export const Default: Story = {
  render: () => (
    <BreadcrumbDefault>
      <BreadcrumbList>{'Text'}</BreadcrumbList>
      <BreadcrumbItem>{'Menu item'}</BreadcrumbItem>
      <BreadcrumbLink>{'Home'}</BreadcrumbLink>
      <BreadcrumbPage>{'Current page'}</BreadcrumbPage>
      <BreadcrumbSeparator />
      <BreadcrumbEllipsis />
    </BreadcrumbDefault>
  ),
}
