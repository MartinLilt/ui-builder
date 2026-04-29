import type { Meta, StoryObj } from '@storybook/react'
import { InputWithSuffix } from '@getpromptui/ui'

const meta: Meta<typeof InputWithSuffix> = {
  title: 'Generated/Inputs/WithSuffix',
  component: InputWithSuffix,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof InputWithSuffix>

export const Default: Story = {
  render: () => (
    <InputWithSuffix />
  ),
}
