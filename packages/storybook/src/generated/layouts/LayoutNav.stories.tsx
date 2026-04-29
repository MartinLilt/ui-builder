import type { Meta, StoryObj } from '@storybook/react'
import { LayoutNav } from '@getpromptui/ui'

const meta: Meta<typeof LayoutNav> = {
  title: 'Generated/Layouts/Nav',
  component: LayoutNav,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof LayoutNav>

export const Default: Story = {
  render: () => (
    <LayoutNav>{'Sample content'}</LayoutNav>
  ),
}
