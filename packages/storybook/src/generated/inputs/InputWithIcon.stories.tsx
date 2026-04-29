import type { Meta, StoryObj } from '@storybook/react'
import { InputWithIcon } from '@getpromptui/ui'

const meta: Meta<typeof InputWithIcon> = {
  title: 'Generated/Inputs/WithIcon',
  component: InputWithIcon,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof InputWithIcon>

export const Default: Story = {
  render: () => (
    <InputWithIcon />
  ),
}
