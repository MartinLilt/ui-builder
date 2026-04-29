import type { Meta, StoryObj } from '@storybook/react'
import { SkeletonText } from '@getpromptui/ui'

const meta: Meta<typeof SkeletonText> = {
  title: 'Generated/Skeletons/Text',
  component: SkeletonText,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof SkeletonText>

export const Default: Story = {
  render: () => (
    <SkeletonText />
  ),
}
