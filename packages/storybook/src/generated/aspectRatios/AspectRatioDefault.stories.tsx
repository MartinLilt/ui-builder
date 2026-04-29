import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatioDefault } from '@getpromptui/ui'

const meta: Meta<typeof AspectRatioDefault> = {
  title: 'Generated/AspectRatios/Default',
  component: AspectRatioDefault,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof AspectRatioDefault>

export const Default: Story = {
  render: () => (
    <AspectRatioDefault>{<div style={{ width: '100%', height: '100%', background: '#e5e7eb' }} />}</AspectRatioDefault>
  ),
}
