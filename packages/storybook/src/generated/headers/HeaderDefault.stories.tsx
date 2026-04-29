import type { Meta, StoryObj } from '@storybook/react'
import { HeaderDefault, HeaderBrand, HeaderNav, HeaderActions } from '@getpromptui/ui'

const meta: Meta<typeof HeaderDefault> = {
  title: 'Generated/Headers/Default',
  component: HeaderDefault,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof HeaderDefault>

export const Default: Story = {
  render: () => (
    <HeaderDefault>
      <HeaderBrand />
      <HeaderNav />
      <HeaderActions />
    </HeaderDefault>
  ),
}
