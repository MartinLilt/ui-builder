import type { Meta, StoryObj } from '@storybook/react'
import { InputSearch } from '@getpromptui/ui'

const meta: Meta<typeof InputSearch> = {
  title: 'Generated/Inputs/Search',
  component: InputSearch,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof InputSearch>

export const Default: Story = {
  render: () => (
    <InputSearch />
  ),
}
