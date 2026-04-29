import type { Meta, StoryObj } from '@storybook/react'
import { CardProfile, CardProfileName, CardProfileRole, CardProfileBio, CardProfileActions } from '@getpromptui/ui'

const meta: Meta<typeof CardProfile> = {
  title: 'Generated/Cards/Profile',
  component: CardProfile,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof CardProfile>

export const Default: Story = {
  render: () => (
    <CardProfile>
      <CardProfileName>{'Card title'}</CardProfileName>
      <CardProfileRole>{'Software engineer'}</CardProfileRole>
      <CardProfileBio>{'A short supporting description for context.'}</CardProfileBio>
      <CardProfileActions>{'Text'}</CardProfileActions>
      
    </CardProfile>
  ),
}
