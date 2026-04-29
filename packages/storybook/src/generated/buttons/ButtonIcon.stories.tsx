import type { Meta, StoryObj } from '@storybook/react'
import { ButtonIcon } from '@getpromptui/ui'

const meta: Meta<typeof ButtonIcon> = {
  title: 'Generated/Buttons/Icon',
  component: ButtonIcon,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof ButtonIcon>

export const Default: Story = {
  render: () => (
    <ButtonIcon aria-label="Action">{<span aria-hidden="true">★</span>}</ButtonIcon>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <ButtonIcon aria-label="Action" variant="default">{'default'}</ButtonIcon>
      <ButtonIcon aria-label="Action" variant="destructive">{'destructive'}</ButtonIcon>
      <ButtonIcon aria-label="Action" variant="outline">{'outline'}</ButtonIcon>
      <ButtonIcon aria-label="Action" variant="secondary">{'secondary'}</ButtonIcon>
      <ButtonIcon aria-label="Action" variant="ghost">{'ghost'}</ButtonIcon>
      <ButtonIcon aria-label="Action" variant="link">{'link'}</ButtonIcon>
    </div>
  ),
}
