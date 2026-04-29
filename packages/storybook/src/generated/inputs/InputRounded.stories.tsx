import type { Meta, StoryObj } from '@storybook/react'
import { InputRounded } from '@getpromptui/ui'

const meta: Meta<typeof InputRounded> = {
  title: 'Generated/Inputs/Rounded',
  component: InputRounded,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof InputRounded>

export const Default: Story = {
  render: () => (
    <InputRounded />
  ),
}
