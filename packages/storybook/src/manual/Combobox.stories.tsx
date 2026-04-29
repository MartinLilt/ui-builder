import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ComboboxDefault } from '@getpromptui/ui'

const meta: Meta = {
  title: 'Components/Combobox',
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj

const FRAMEWORKS = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string>('react')
    const [open, setOpen] = useState(false)
    return (
      <div style={{ width: 240 }}>
        <ComboboxDefault
          value={value}
          options={FRAMEWORKS}
          open={open}
          onOpenChange={setOpen}
          onChange={setValue}
          placeholder="Pick a framework"
        />
      </div>
    )
  },
}
