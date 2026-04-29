import type { Meta, StoryObj } from '@storybook/react'
import { InputEmail } from '@getpromptui/ui'

const meta: Meta<typeof InputEmail> = {
  title: 'Generated/Inputs/Email',
  component: InputEmail,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof InputEmail>

export const Default: Story = {
  render: () => (
    <InputEmail />
  ),
}
