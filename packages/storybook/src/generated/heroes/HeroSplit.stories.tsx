import type { Meta, StoryObj } from '@storybook/react'
import { HeroSplit, HeroSplitContent, HeroSplitVisual, HeroTitle, HeroSubtitle, HeroActions, HeroEyebrow } from '@getpromptui/ui'

const meta: Meta<typeof HeroSplit> = {
  title: 'Generated/Heroes/Split',
  component: HeroSplit,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof HeroSplit>

export const Default: Story = {
  render: () => (
    <HeroSplit>
      <HeroSplitContent>{'Content goes here.'}</HeroSplitContent>
      
      <HeroSplitVisual>{'Text'}</HeroSplitVisual>
      
      <HeroTitle>{'Card title'}</HeroTitle>
      <HeroSubtitle>{'Text'}</HeroSubtitle>
      <HeroActions>{'Text'}</HeroActions>
      
      <HeroEyebrow>{'Eyebrow'}</HeroEyebrow>
      
    </HeroSplit>
  ),
}
