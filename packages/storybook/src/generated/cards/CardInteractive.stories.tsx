import type { Meta, StoryObj } from '@storybook/react'
import { CardInteractive, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@getpromptui/ui'

const meta: Meta<typeof CardInteractive> = {
  title: 'Generated/Cards/Interactive',
  component: CardInteractive,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof CardInteractive>

export const Default: Story = {
  render: () => (
    <CardInteractive>
      <CardHeader />
      <CardTitle>{'Card title'}</CardTitle>
      <CardDescription>{'A short supporting description for context.'}</CardDescription>
      <CardContent>{'Content goes here.'}</CardContent>
      
      <CardFooter>{'Footer text'}</CardFooter>
      
    </CardInteractive>
  ),
}
