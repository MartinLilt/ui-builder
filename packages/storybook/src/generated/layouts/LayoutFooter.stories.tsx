import type { Meta, StoryObj } from '@storybook/react'
import { LayoutFooter } from '@getpromptui/ui'

const meta: Meta<typeof LayoutFooter> = {
  title: 'Generated/Layouts/Footer',
  component: LayoutFooter,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof LayoutFooter>

export const Default: Story = {
  render: () => (
    <LayoutFooter>{'Sample content'}</LayoutFooter>
  ),
}
