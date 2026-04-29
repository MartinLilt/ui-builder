import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGhost } from '@getpromptui/ui'

const meta: Meta<typeof ButtonGhost> = {
  title: 'Generated/Buttons/Ghost',
  component: ButtonGhost,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof ButtonGhost>

export const Default: Story = {
  render: () => (
    <ButtonGhost>{'Click me'}</ButtonGhost>
  ),
}
