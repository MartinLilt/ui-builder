import type { Meta, StoryObj } from '@storybook/react'
import { AvatarWithStatus, AvatarFallback } from '@getpromptui/ui'

const meta: Meta<typeof AvatarWithStatus> = {
  title: 'Generated/Avatars/WithStatus',
  component: AvatarWithStatus,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof AvatarWithStatus>

export const Default: Story = {
  render: () => (
    <AvatarWithStatus>
      <AvatarFallback>{'JD'}</AvatarFallback>
    </AvatarWithStatus>
  ),
}
