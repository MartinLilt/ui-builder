import type { Meta, StoryObj } from '@storybook/react'
import { TextareaDefault } from '@getpromptui/ui'

const meta: Meta<typeof TextareaDefault> = {
  title: 'Generated/Textareas/Default',
  component: TextareaDefault,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof TextareaDefault>

export const Default: Story = {
  render: () => (
    <TextareaDefault />
  ),
}
