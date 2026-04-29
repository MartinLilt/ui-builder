import type { Meta, StoryObj } from '@storybook/react'
import { InputWithPrefix } from '@getpromptui/ui'

const meta: Meta<typeof InputWithPrefix> = {
  title: 'Generated/Inputs/WithPrefix',
  component: InputWithPrefix,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof InputWithPrefix>

export const Default: Story = {
  render: () => (
    <InputWithPrefix />
  ),
}
