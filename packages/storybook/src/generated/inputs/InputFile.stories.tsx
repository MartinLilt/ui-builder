import type { Meta, StoryObj } from '@storybook/react'
import { InputFile } from '@getpromptui/ui'

const meta: Meta<typeof InputFile> = {
  title: 'Generated/Inputs/File',
  component: InputFile,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof InputFile>

export const Default: Story = {
  render: () => (
    <InputFile />
  ),
}
