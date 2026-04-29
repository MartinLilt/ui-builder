import type { Meta, StoryObj } from '@storybook/react'
import { LayoutSection } from '@getpromptui/ui'

const meta: Meta<typeof LayoutSection> = {
  title: 'Generated/Layouts/Section',
  component: LayoutSection,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof LayoutSection>

export const Default: Story = {
  render: () => (
    <LayoutSection>{'Sample content'}</LayoutSection>
  ),
}
