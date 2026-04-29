import type { Meta, StoryObj } from '@storybook/react'
import { InputDefault } from '@getpromptui/ui'

const meta: Meta<typeof InputDefault> = {
  title: 'Generated/Inputs/Default',
  component: InputDefault,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof InputDefault>

export const Default: Story = {
  render: () => (
    <InputDefault />
  ),
}
