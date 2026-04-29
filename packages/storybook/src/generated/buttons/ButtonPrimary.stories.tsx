import type { Meta, StoryObj } from '@storybook/react'
import { ButtonPrimary } from '@getpromptui/ui'

const meta: Meta<typeof ButtonPrimary> = {
  title: 'Generated/Buttons/Primary',
  component: ButtonPrimary,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof ButtonPrimary>

export const Default: Story = {
  render: () => (
    <ButtonPrimary>{'Click me'}</ButtonPrimary>
  ),
}
