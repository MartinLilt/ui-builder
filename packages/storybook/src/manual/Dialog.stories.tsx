import type { Meta, StoryObj } from '@storybook/react'
import {
  DialogDefault,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  ButtonDefault,
} from '@getpromptui/ui'

const meta: Meta = {
  title: 'Components/Dialog',
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <DialogDefault>
      <DialogTrigger asChild>
        <ButtonDefault>Open dialog</ButtonDefault>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. Your changes will be lost.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <ButtonDefault variant="ghost">Cancel</ButtonDefault>
          </DialogClose>
          <DialogClose asChild>
            <ButtonDefault variant="destructive">Delete</ButtonDefault>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </DialogDefault>
  ),
}