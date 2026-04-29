import type { Meta, StoryObj } from '@storybook/react'
import { HeroWithVideo, HeroWithVideoOverlay, HeroWithVideoContent, HeroTitle, HeroSubtitle, HeroActions, HeroEyebrow } from '@getpromptui/ui'

const meta: Meta<typeof HeroWithVideo> = {
  title: 'Generated/Heroes/WithVideo',
  component: HeroWithVideo,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof HeroWithVideo>

export const Default: Story = {
  render: () => (
    <HeroWithVideo>
      <HeroWithVideoOverlay>{'Text'}</HeroWithVideoOverlay>
      <HeroWithVideoContent>{'Content goes here.'}</HeroWithVideoContent>
      <HeroTitle>{'Card title'}</HeroTitle>
      <HeroSubtitle>{'Text'}</HeroSubtitle>
      <HeroActions>{'Text'}</HeroActions>
      
      <HeroEyebrow>{'Eyebrow'}</HeroEyebrow>
      
    </HeroWithVideo>
  ),
}
