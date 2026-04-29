import type { Meta, StoryObj } from '@storybook/react'
import { CardMedia, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@getpromptui/ui'

const meta: Meta<typeof CardMedia> = {
  title: 'Generated/Cards/Media',
  component: CardMedia,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof CardMedia>

export const Default: Story = {
  render: () => (
    <CardMedia>
      <CardHeader />
      <CardTitle>{'Card title'}</CardTitle>
      <CardDescription>{'A short supporting description for context.'}</CardDescription>
      <CardContent>{'Content goes here.'}</CardContent>
      
      <CardFooter>{'Footer text'}</CardFooter>
      
    </CardMedia>
  ),
}
