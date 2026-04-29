import type { Meta, StoryObj } from '@storybook/react'
import { SeparatorDefault } from '@getpromptui/ui'

const meta: Meta<typeof SeparatorDefault> = {
  title: 'Generated/Separators/Default',
  component: SeparatorDefault,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof SeparatorDefault>

export const Default: Story = {
  render: () => (
    <SeparatorDefault />
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <SeparatorDefault variant="default" />
      <SeparatorDefault variant="dashed" />
      <SeparatorDefault variant="dotted" />
    </div>
  ),
}
