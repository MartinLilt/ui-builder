import type { Meta, StoryObj } from '@storybook/react'
import { InputDate } from '@getpromptui/ui'

const meta: Meta<typeof InputDate> = {
  title: 'Generated/Inputs/Date',
  component: InputDate,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof InputDate>

export const Default: Story = {
  render: () => (
    <InputDate />
  ),
}
