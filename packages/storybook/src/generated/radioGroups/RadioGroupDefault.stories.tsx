import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Generated/RadioGroups/Default',
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div style={{ padding: '1rem', color: '#888', fontFamily: 'system-ui' }}>
      Composition required — see manual stories for RadioGroupDefault.
    </div>
  ),
}
