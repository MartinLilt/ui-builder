import type { Meta, StoryObj } from '@storybook/react'
import { HeroCentered, HeroTitle, HeroSubtitle, HeroActions, HeroEyebrow } from '@getpromptui/ui'

const meta: Meta<typeof HeroCentered> = {
  title: 'Generated/Heroes/Centered',
  component: HeroCentered,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof HeroCentered>

export const Default: Story = {
  render: () => (
    <HeroCentered>
      <HeroTitle>{'Card title'}</HeroTitle>
      <HeroSubtitle>{'Text'}</HeroSubtitle>
      <HeroActions>{'Text'}</HeroActions>
      
      <HeroEyebrow>{'Eyebrow'}</HeroEyebrow>
      
    </HeroCentered>
  ),
}
