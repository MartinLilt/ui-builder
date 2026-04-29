import type { Meta, StoryObj } from '@storybook/react'
import { ComboboxDefault } from '@getpromptui/ui'

const meta: Meta<typeof ComboboxDefault> = {
  title: 'Generated/Comboboxes/Default',
  component: ComboboxDefault,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof ComboboxDefault>

export const Default: Story = {
  render: () => (
    <ComboboxDefault>{'Sample content'}</ComboboxDefault>
  ),
}
