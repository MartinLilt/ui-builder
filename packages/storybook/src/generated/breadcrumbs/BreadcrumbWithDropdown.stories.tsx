import type { Meta, StoryObj } from '@storybook/react'
import { BreadcrumbWithDropdown, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbDropdown, BreadcrumbDropdownTrigger, BreadcrumbDropdownContent } from '@getpromptui/ui'

const meta: Meta<typeof BreadcrumbWithDropdown> = {
  title: 'Generated/Breadcrumbs/WithDropdown',
  component: BreadcrumbWithDropdown,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof BreadcrumbWithDropdown>

export const Default: Story = {
  render: () => (
    <BreadcrumbWithDropdown>
      <BreadcrumbList>{'Text'}</BreadcrumbList>
      <BreadcrumbItem>{'Menu item'}</BreadcrumbItem>
      <BreadcrumbLink>{'Home'}</BreadcrumbLink>
      <BreadcrumbPage>{'Current page'}</BreadcrumbPage>
      <BreadcrumbSeparator />
      <BreadcrumbDropdown>{'Text'}</BreadcrumbDropdown>
      <BreadcrumbDropdownTrigger>{'Open'}</BreadcrumbDropdownTrigger>
      <BreadcrumbDropdownContent>{'Content goes here.'}</BreadcrumbDropdownContent>
    </BreadcrumbWithDropdown>
  ),
}
