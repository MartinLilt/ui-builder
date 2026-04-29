import type { Meta, StoryObj } from '@storybook/react'
import {
  AccordionDefault,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  CollapsibleDefault,
  CollapsibleTrigger,
  CollapsibleContent,
  ButtonDefault,
} from '@getpromptui/ui'

const meta: Meta = {
  title: 'Components/Disclosure',
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const Accordion: Story = {
  render: () => (
    <AccordionDefault type="single" collapsible defaultValue="item-1" style={{ width: 480 }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is PromptUI?</AccordionTrigger>
        <AccordionContent>
          A declarative UI DSL that compiles into React components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Does it support Vue?</AccordionTrigger>
        <AccordionContent>
          Yes — pass <code>--target vue</code> to the CLI.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it production-ready?</AccordionTrigger>
        <AccordionContent>
          v0.4 is the first production-ready release.
        </AccordionContent>
      </AccordionItem>
    </AccordionDefault>
  ),
}

export const Collapsible: Story = {
  render: () => (
    <CollapsibleDefault defaultOpen={false} style={{ width: 360 }}>
      <CollapsibleTrigger asChild>
        <ButtonDefault variant="outline">Toggle details</ButtonDefault>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p style={{ marginTop: '0.75rem' }}>Hidden content revealed on click.</p>
      </CollapsibleContent>
    </CollapsibleDefault>
  ),
}