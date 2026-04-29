import type { Meta, StoryObj } from '@storybook/react'
import { GradientH2 } from '@getpromptui/ui'

const meta: Meta<typeof GradientH2> = {
  title: 'Generated/Headings/GradientH2',
  component: GradientH2,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof GradientH2>

export const Default: Story = {
  render: () => (
    <GradientH2>{'Sample content'}</GradientH2>
  ),
}
