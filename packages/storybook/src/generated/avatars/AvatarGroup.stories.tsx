import type { Meta, StoryObj } from '@storybook/react'
import { AvatarGroup, AvatarDefault, AvatarFallback, AvatarGroupOverflow } from '@getpromptui/ui'

const meta: Meta<typeof AvatarGroup> = {
  title: 'Generated/Avatars/Group',
  component: AvatarGroup,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof AvatarGroup>

export const Default: Story = {
  render: () => (
    <AvatarGroup>
      <AvatarDefault>{'Text'}</AvatarDefault>
      <AvatarFallback>{'JD'}</AvatarFallback>
      <AvatarGroupOverflow count={3} />
    </AvatarGroup>
  ),
}
