import type { Meta, StoryObj } from '@storybook/react'
import { InputNumber } from '@getpromptui/ui'

const meta: Meta<typeof InputNumber> = {
  title: 'Generated/Inputs/Number',
  component: InputNumber,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof InputNumber>

export const Default: Story = {
  render: () => (
    <InputNumber />
  ),
}
