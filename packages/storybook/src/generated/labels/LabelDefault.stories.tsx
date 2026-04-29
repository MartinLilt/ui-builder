import type { Meta, StoryObj } from '@storybook/react'
import { LabelDefault } from '@getpromptui/ui'

const meta: Meta<typeof LabelDefault> = {
  title: 'Generated/Labels/Default',
  component: LabelDefault,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof LabelDefault>

export const Default: Story = {
  render: () => (
    <LabelDefault>{'Email address'}</LabelDefault>
  ),
}
