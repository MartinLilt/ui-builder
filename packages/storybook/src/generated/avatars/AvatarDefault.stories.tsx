import type { Meta, StoryObj } from '@storybook/react'
import { AvatarDefault, AvatarFallback } from '@getpromptui/ui'

const meta: Meta<typeof AvatarDefault> = {
  title: 'Generated/Avatars/Default',
  component: AvatarDefault,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof AvatarDefault>

export const Default: Story = {
  render: () => (
    <AvatarDefault>
      <AvatarFallback>{'JD'}</AvatarFallback>
    </AvatarDefault>
  ),
}
