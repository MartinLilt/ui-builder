import type { Meta, StoryObj } from '@storybook/react'
import { SkeletonDefault } from '@getpromptui/ui'

const meta: Meta<typeof SkeletonDefault> = {
  title: 'Generated/Skeletons/Default',
  component: SkeletonDefault,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof SkeletonDefault>

export const Default: Story = {
  render: () => (
    <SkeletonDefault />
  ),
}
