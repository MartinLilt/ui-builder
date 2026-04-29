import type { Meta, StoryObj } from '@storybook/react'
import { SkeletonCard } from '@getpromptui/ui'

const meta: Meta<typeof SkeletonCard> = {
  title: 'Generated/Skeletons/Card',
  component: SkeletonCard,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof SkeletonCard>

export const Default: Story = {
  render: () => (
    <SkeletonCard />
  ),
}
