import type { Meta, StoryObj } from '@storybook/react'
import { ButtonLoading } from '@getpromptui/ui'

const meta: Meta<typeof ButtonLoading> = {
  title: 'Generated/Buttons/Loading',
  component: ButtonLoading,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof ButtonLoading>

export const Default: Story = {
  render: () => (
    <ButtonLoading>{'Click me'}</ButtonLoading>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <ButtonLoading variant="default">{'default'}</ButtonLoading>
      <ButtonLoading variant="destructive">{'destructive'}</ButtonLoading>
      <ButtonLoading variant="outline">{'outline'}</ButtonLoading>
      <ButtonLoading variant="secondary">{'secondary'}</ButtonLoading>
      <ButtonLoading variant="ghost">{'ghost'}</ButtonLoading>
      <ButtonLoading variant="link">{'link'}</ButtonLoading>
    </div>
  ),
}
