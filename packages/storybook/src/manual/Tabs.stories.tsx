import type { Meta, StoryObj } from '@storybook/react'
import {
  TabDefault,
  TabList,
  TabTrigger,
  TabContent,
  TabVertical,
  TabVerticalList,
  TabVerticalPanels,
} from '@getpromptui/ui'

const meta: Meta = {
  title: 'Components/Tabs',
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <TabDefault defaultValue="overview" style={{ width: 520 }}>
      <TabList>
        <TabTrigger value="overview">Overview</TabTrigger>
        <TabTrigger value="usage">Usage</TabTrigger>
        <TabTrigger value="api">API</TabTrigger>
      </TabList>
      <TabContent value="overview">
        <p>One DSL. Compiles to React or Vue. v0.4 production-ready.</p>
      </TabContent>
      <TabContent value="usage">
        <p>Install <code>@getpromptui/core</code> and run <code>promptui compile</code>.</p>
      </TabContent>
      <TabContent value="api">
        <p>See the directives reference for the full grammar.</p>
      </TabContent>
    </TabDefault>
  ),
}

export const Vertical: Story = {
  render: () => (
    <TabVertical defaultValue="settings" style={{ width: 560, display: 'flex', gap: '1rem' }}>
      <TabVerticalList>
        <TabTrigger value="profile">Profile</TabTrigger>
        <TabTrigger value="settings">Settings</TabTrigger>
        <TabTrigger value="billing">Billing</TabTrigger>
      </TabVerticalList>
      <TabVerticalPanels>
        <TabContent value="profile">Profile pane.</TabContent>
        <TabContent value="settings">Settings pane.</TabContent>
        <TabContent value="billing">Billing pane.</TabContent>
      </TabVerticalPanels>
    </TabVertical>
  ),
}