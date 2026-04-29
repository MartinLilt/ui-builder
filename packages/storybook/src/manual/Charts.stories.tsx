import type { Meta, StoryObj } from '@storybook/react'
import { ChartBar, ChartLine, ChartArea, ChartPie } from '@getpromptui/ui'

const meta: Meta = {
  title: 'Components/Charts',
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj

const DATA = [
  { label: 'Mon', value: 12 },
  { label: 'Tue', value: 19 },
  { label: 'Wed', value: 8 },
  { label: 'Thu', value: 22 },
  { label: 'Fri', value: 15 },
  { label: 'Sat', value: 6 },
  { label: 'Sun', value: 11 },
]

export const Bar: Story = {
  render: () => <ChartBar data={DATA} />,
}

export const Line: Story = {
  render: () => <ChartLine data={DATA} />,
}

export const Area: Story = {
  render: () => <ChartArea data={DATA} />,
}

export const Pie: Story = {
  render: () => <ChartPie data={DATA} innerRadius={0.5} />,
}