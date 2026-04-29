import type { Meta, StoryObj } from '@storybook/react'
import { ComboboxMulti } from '@getpromptui/ui'

const meta: Meta<typeof ComboboxMulti> = {
  title: 'Generated/Comboboxes/Multi',
  component: ComboboxMulti,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof ComboboxMulti>

export const Default: Story = {
  render: () => (
    <ComboboxMulti>{'Sample content'}</ComboboxMulti>
  ),
}
