import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  SelectDefault,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  RadioGroupDefault,
  RadioGroupItem,
  ToggleGroupDefault,
  ToggleGroupItem,
  LabelDefault,
} from '@getpromptui/ui'

const meta: Meta = {
  title: 'Components/Forms',
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj

export const Select: Story = {
  render: () => (
    <div style={{ width: 240 }}>
      <SelectDefault defaultValue="react">
        <SelectTrigger>
          <SelectValue placeholder="Pick a framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
          <SelectItem value="solid">Solid</SelectItem>
        </SelectContent>
      </SelectDefault>
    </div>
  ),
}

export const RadioGroup: Story = {
  render: () => {
    const [value, setValue] = useState('comfortable')
    return (
      <RadioGroupDefault value={value} onValueChange={setValue} style={{ display: 'grid', gap: '0.5rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <RadioGroupItem id="r-default" value="default" />
          <LabelDefault htmlFor="r-default">Default</LabelDefault>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <RadioGroupItem id="r-comfortable" value="comfortable" />
          <LabelDefault htmlFor="r-comfortable">Comfortable</LabelDefault>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <RadioGroupItem id="r-compact" value="compact" />
          <LabelDefault htmlFor="r-compact">Compact</LabelDefault>
        </div>
      </RadioGroupDefault>
    )
  },
}

export const ToggleGroup: Story = {
  render: () => (
    <ToggleGroupDefault type="single" defaultValue="bold">
      <ToggleGroupItem value="bold">B</ToggleGroupItem>
      <ToggleGroupItem value="italic">I</ToggleGroupItem>
      <ToggleGroupItem value="underline">U</ToggleGroupItem>
    </ToggleGroupDefault>
  ),
}