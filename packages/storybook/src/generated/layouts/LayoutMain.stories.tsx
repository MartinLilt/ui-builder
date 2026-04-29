import type { Meta, StoryObj } from '@storybook/react'
import { LayoutMain } from '@getpromptui/ui'

const meta: Meta<typeof LayoutMain> = {
  title: 'Generated/Layouts/Main',
  component: LayoutMain,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof LayoutMain>

export const Default: Story = {
  render: () => (
    <LayoutMain>{'Sample content'}</LayoutMain>
  ),
}
