import type { Meta, StoryObj } from '@storybook/react'
import { CardPricing, CardPricingHeader, CardPricingName, CardPricingPrice, CardPricingFeatures, CardPricingFeature, CardPricingCta } from '@getpromptui/ui'

const meta: Meta<typeof CardPricing> = {
  title: 'Generated/Cards/Pricing',
  component: CardPricing,
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof CardPricing>

export const Default: Story = {
  render: () => (
    <CardPricing>
      <CardPricingHeader />
      <CardPricingName>{'Card title'}</CardPricingName>
      <CardPricingPrice>{'$19/mo'}</CardPricingPrice>
      <CardPricingFeatures>{'Unlimited components'}</CardPricingFeatures>
      
      <CardPricingFeature>{'Unlimited components'}</CardPricingFeature>
      <CardPricingCta>{'Get started'}</CardPricingCta>
      
    </CardPricing>
  ),
}
