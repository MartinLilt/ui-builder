import type { Meta, StoryObj } from '@storybook/react'
import { CardStat, CardStatLabel, CardStatValue, CardStatTrend, CardStatDescription } from '@getpromptui/ui'

const meta: Meta<typeof CardStat> = {
  title: 'Generated/Cards/Stat',
  component: CardStat,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof CardStat>

export const Default: Story = {
  render: () => (
    <CardStat>
      <CardStatLabel>{'Label'}</CardStatLabel>
      <CardStatValue>{'1,234'}</CardStatValue>
      <CardStatTrend>{'+12%'}</CardStatTrend>
      <CardStatDescription>{'A short supporting description for context.'}</CardStatDescription>
    </CardStat>
  ),
}
