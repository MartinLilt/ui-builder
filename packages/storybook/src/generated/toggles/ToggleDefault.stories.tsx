import type { Meta, StoryObj } from '@storybook/react'
import { ToggleDefault } from '@getpromptui/ui'

const meta: Meta<typeof ToggleDefault> = {
  title: 'Generated/Toggles/Default',
  component: ToggleDefault,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof ToggleDefault>

export const Default: Story = {
  render: () => (
    <ToggleDefault>{'Bold'}</ToggleDefault>
  ),
}
