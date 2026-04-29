import type { Meta, StoryObj } from '@storybook/react'
import { SeparatorWithLabel } from '@getpromptui/ui'

const meta: Meta<typeof SeparatorWithLabel> = {
  title: 'Generated/Separators/WithLabel',
  component: SeparatorWithLabel,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof SeparatorWithLabel>

export const Default: Story = {
  render: () => (
    <SeparatorWithLabel />
  ),
}
