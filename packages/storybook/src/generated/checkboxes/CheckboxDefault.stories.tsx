import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxDefault } from '@getpromptui/ui'

const meta: Meta<typeof CheckboxDefault> = {
  title: 'Generated/Checkboxes/Default',
  component: CheckboxDefault,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof CheckboxDefault>

export const Default: Story = {
  render: () => (
    <CheckboxDefault />
  ),
}
