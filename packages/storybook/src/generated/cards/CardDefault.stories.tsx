import type { Meta, StoryObj } from '@storybook/react'
import { CardDefault, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@getpromptui/ui'

const meta: Meta<typeof CardDefault> = {
  title: 'Generated/Cards/Default',
  component: CardDefault,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof CardDefault>

export const Default: Story = {
  render: () => (
    <CardDefault>
      <CardHeader />
      <CardTitle>{'Card title'}</CardTitle>
      <CardDescription>{'A short supporting description for context.'}</CardDescription>
      <CardContent>{'Content goes here.'}</CardContent>
      
      <CardFooter>{'Footer text'}</CardFooter>
      
    </CardDefault>
  ),
}
