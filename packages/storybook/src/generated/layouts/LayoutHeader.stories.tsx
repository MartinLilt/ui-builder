import type { Meta, StoryObj } from '@storybook/react'
import { LayoutHeader } from '@getpromptui/ui'

const meta: Meta<typeof LayoutHeader> = {
  title: 'Generated/Layouts/Header',
  component: LayoutHeader,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof LayoutHeader>

export const Default: Story = {
  render: () => (
    <LayoutHeader>{'Sample content'}</LayoutHeader>
  ),
}
