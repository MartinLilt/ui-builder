import type { Meta, StoryObj } from '@storybook/react'
import { AlertDefault, AlertTitle, AlertDescription } from '@getpromptui/ui'

const meta: Meta<typeof AlertDefault> = {
  title: 'Generated/Alerts/Default',
  component: AlertDefault,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof AlertDefault>

export const Default: Story = {
  render: () => (
    <AlertDefault>
      <AlertTitle>{'Card title'}</AlertTitle>
      <AlertDescription>{'A short supporting description for context.'}</AlertDescription>
    </AlertDefault>
  ),
}
