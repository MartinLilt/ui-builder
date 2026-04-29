import type { Meta, StoryObj } from '@storybook/react'
import {
  TooltipDefault,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  PopoverDefault,
  PopoverTrigger,
  PopoverContent,
  HoverCardDefault,
  HoverCardTrigger,
  HoverCardContent,
  AlertDialogDefault,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
  ButtonDefault,
} from '@getpromptui/ui'

const meta: Meta = {
  title: 'Components/Overlays',
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj

export const Tooltip: Story = {
  render: () => (
    <TooltipProvider>
      <TooltipDefault>
        <TooltipTrigger asChild>
          <ButtonDefault variant="outline">Hover me</ButtonDefault>
        </TooltipTrigger>
        <TooltipContent>Helpful hint</TooltipContent>
      </TooltipDefault>
    </TooltipProvider>
  ),
}

export const Popover: Story = {
  render: () => (
    <PopoverDefault>
      <PopoverTrigger asChild>
        <ButtonDefault variant="outline">Open popover</ButtonDefault>
      </PopoverTrigger>
      <PopoverContent>
        <h4 style={{ margin: 0 }}>Settings</h4>
        <p style={{ marginTop: '0.5rem' }}>Inline content panel anchored to the trigger.</p>
      </PopoverContent>
    </PopoverDefault>
  ),
}

export const HoverCard: Story = {
  render: () => (
    <HoverCardDefault>
      <HoverCardTrigger asChild>
        <ButtonDefault variant="link">@martinli</ButtonDefault>
      </HoverCardTrigger>
      <HoverCardContent>
        <strong>Martin Li</strong>
        <p style={{ marginTop: '0.25rem' }}>Author of PromptUI. Hover to learn more.</p>
      </HoverCardContent>
    </HoverCardDefault>
  ),
}

export const AlertDialog: Story = {
  render: () => (
    <AlertDialogDefault>
      <AlertDialogTrigger asChild>
        <ButtonDefault variant="destructive">Delete account</ButtonDefault>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete your account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogDefault>
  ),
}