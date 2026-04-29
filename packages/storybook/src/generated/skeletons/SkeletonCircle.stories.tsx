import type { Meta, StoryObj } from '@storybook/react'
import { SkeletonCircle } from '@getpromptui/ui'

const meta: Meta<typeof SkeletonCircle> = {
  title: 'Generated/Skeletons/Circle',
  component: SkeletonCircle,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof SkeletonCircle>

export const Default: Story = {
  render: () => (
    <SkeletonCircle />
  ),
}
