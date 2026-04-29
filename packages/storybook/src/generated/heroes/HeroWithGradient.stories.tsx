import type { Meta, StoryObj } from '@storybook/react'
import { HeroWithGradient, HeroTitle, HeroSubtitle, HeroActions, HeroEyebrow } from '@getpromptui/ui'

const meta: Meta<typeof HeroWithGradient> = {
  title: 'Generated/Heroes/WithGradient',
  component: HeroWithGradient,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof HeroWithGradient>

export const Default: Story = {
  render: () => (
    <HeroWithGradient>
      <HeroTitle>{'Card title'}</HeroTitle>
      <HeroSubtitle>{'Text'}</HeroSubtitle>
      <HeroActions>{'Text'}</HeroActions>
      
      <HeroEyebrow>{'Eyebrow'}</HeroEyebrow>
      
    </HeroWithGradient>
  ),
}
