import type { Meta, StoryObj } from '@storybook/react'
import {
  DropdownMenuDefault,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  ContextMenuDefault,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ButtonDefault,
} from '@getpromptui/ui'

const meta: Meta = {
  title: 'Components/Menus',
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj

export const Dropdown: Story = {
  render: () => (
    <DropdownMenuDefault>
      <DropdownMenuTrigger asChild>
        <ButtonDefault variant="outline">Open menu</ButtonDefault>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuDefault>
  ),
}

export const Context: Story = {
  render: () => (
    <ContextMenuDefault>
      <ContextMenuTrigger asChild>
        <div
          style={{
            width: 320,
            padding: '2rem',
            border: '1px dashed #cbd5e1',
            borderRadius: 8,
            textAlign: 'center',
          }}
        >
          Right-click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Cut</ContextMenuItem>
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Paste</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenuDefault>
  ),
}