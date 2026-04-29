import type { Meta, StoryObj } from '@storybook/react'
import { DialogDefault, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from '@getpromptui/ui'

const meta: Meta<typeof DialogDefault> = {
  title: 'Generated/Dialogs/Default',
  component: DialogDefault,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof DialogDefault>

export const Default: Story = {
  render: () => (
    <DialogDefault>
      <DialogTrigger>{'Open'}</DialogTrigger>
      <DialogContent>{'Content goes here.'}</DialogContent>
      <DialogHeader />
      <DialogFooter>{'Footer text'}</DialogFooter>
      
      <DialogTitle>{'Card title'}</DialogTitle>
      <DialogDescription>{'A short supporting description for context.'}</DialogDescription>
      <DialogClose>{'Cancel'}</DialogClose>
    </DialogDefault>
  ),
}
