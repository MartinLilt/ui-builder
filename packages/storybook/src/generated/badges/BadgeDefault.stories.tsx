import type { Meta, StoryObj } from '@storybook/react'
import { BadgeDefault } from '@getpromptui/ui'

const meta: Meta<typeof BadgeDefault> = {
  title: 'Generated/Badges/Default',
  component: BadgeDefault,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof BadgeDefault>

export const Default: Story = {
  render: () => (
    <BadgeDefault>{'Badge'}</BadgeDefault>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <BadgeDefault variant="default">{'default'}</BadgeDefault>
      <BadgeDefault variant="secondary">{'secondary'}</BadgeDefault>
      <BadgeDefault variant="destructive">{'destructive'}</BadgeDefault>
      <BadgeDefault variant="outline">{'outline'}</BadgeDefault>
    </div>
  ),
}
