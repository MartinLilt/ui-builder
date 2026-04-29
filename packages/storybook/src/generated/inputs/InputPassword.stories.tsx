import type { Meta, StoryObj } from '@storybook/react'
import { InputPassword } from '@getpromptui/ui'

const meta: Meta<typeof InputPassword> = {
  title: 'Generated/Inputs/Password',
  component: InputPassword,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof InputPassword>

export const Default: Story = {
  render: () => (
    <InputPassword />
  ),
}
