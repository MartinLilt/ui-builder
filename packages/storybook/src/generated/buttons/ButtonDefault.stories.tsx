import type { Meta, StoryObj } from '@storybook/react'
import { ButtonDefault } from '@getpromptui/ui'

const meta: Meta<typeof ButtonDefault> = {
  title: 'Generated/Buttons/Default',
  component: ButtonDefault,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof ButtonDefault>

export const Default: Story = {
  render: () => (
    <ButtonDefault>{'Click me'}</ButtonDefault>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <ButtonDefault variant="default">{'default'}</ButtonDefault>
      <ButtonDefault variant="destructive">{'destructive'}</ButtonDefault>
      <ButtonDefault variant="outline">{'outline'}</ButtonDefault>
      <ButtonDefault variant="secondary">{'secondary'}</ButtonDefault>
      <ButtonDefault variant="ghost">{'ghost'}</ButtonDefault>
      <ButtonDefault variant="link">{'link'}</ButtonDefault>
    </div>
  ),
}
