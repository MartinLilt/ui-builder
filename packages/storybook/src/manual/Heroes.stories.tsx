import type { Meta, StoryObj } from '@storybook/react'
import {
  HeroSplit,
  HeroSplitContent,
  HeroSplitVisual,
  HeroCentered,
  HeroTitle,
  HeroSubtitle,
  HeroActions,
  HeroEyebrow,
  ButtonDefault,
} from '@getpromptui/ui'

const meta: Meta = {
  title: 'Components/Heroes',
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj

export const Split: Story = {
  render: () => (
    <HeroSplit visualSide="right">
      <HeroSplitContent>
        <HeroEyebrow>New release</HeroEyebrow>
        <HeroTitle>Build UI from prompts</HeroTitle>
        <HeroSubtitle>
          PromptUI compiles semantic instructions into typed React components.
        </HeroSubtitle>
        <HeroActions>
          <ButtonDefault>Get started</ButtonDefault>
          <ButtonDefault variant="ghost">Read the docs</ButtonDefault>
        </HeroActions>
      </HeroSplitContent>
      <HeroSplitVisual>
        <div
          style={{
            background: 'linear-gradient(135deg, #6366f1, #ec4899)',
            borderRadius: '0.75rem',
            aspectRatio: '4 / 3',
          }}
        />
      </HeroSplitVisual>
    </HeroSplit>
  ),
}

export const Centered: Story = {
  render: () => (
    <HeroCentered>
      <HeroEyebrow>v0.5</HeroEyebrow>
      <HeroTitle>One DSL. Every framework.</HeroTitle>
      <HeroSubtitle>
        Write once in <code>.promptui</code>, compile to React or Vue.
      </HeroSubtitle>
      <HeroActions>
        <ButtonDefault>Try the playground</ButtonDefault>
      </HeroActions>
    </HeroCentered>
  ),
}
