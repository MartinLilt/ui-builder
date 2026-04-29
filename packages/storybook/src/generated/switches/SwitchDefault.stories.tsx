import type { Meta, StoryObj } from '@storybook/react'
import { SwitchDefault } from '@getpromptui/ui'

const meta: Meta<typeof SwitchDefault> = {
  title: 'Generated/Switches/Default',
  component: SwitchDefault,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof SwitchDefault>

export const Default: Story = {
  render: () => (
    <SwitchDefault />
  ),
}
