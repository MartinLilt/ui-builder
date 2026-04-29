import type { Meta, StoryObj } from '@storybook/react'
import { LayoutArticle } from '@getpromptui/ui'

const meta: Meta<typeof LayoutArticle> = {
  title: 'Generated/Layouts/Article',
  component: LayoutArticle,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof LayoutArticle>

export const Default: Story = {
  render: () => (
    <LayoutArticle>{'Sample content'}</LayoutArticle>
  ),
}
