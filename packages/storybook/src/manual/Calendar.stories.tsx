import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { CalendarDefault } from '@getpromptui/ui'

const meta: Meta = {
  title: 'Components/Calendar',
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<Date>(new Date())
    return <CalendarDefault value={value} onChange={setValue} />
  },
}
