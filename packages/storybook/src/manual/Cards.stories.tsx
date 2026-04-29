import type { Meta, StoryObj } from '@storybook/react'
import {
  CardDefault,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardPricing,
  CardPricingHeader,
  CardPricingName,
  CardPricingPrice,
  CardPricingFeatures,
  CardPricingFeature,
  CardPricingCta,
  ButtonDefault,
} from '@getpromptui/ui'

const meta: Meta = {
  title: 'Components/Cards',
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <CardDefault style={{ width: 360 }}>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>Manage your account settings.</CardDescription>
      </CardHeader>
      <CardContent>Email, password, and notifications.</CardContent>
      <CardFooter>
        <ButtonDefault>Save</ButtonDefault>
      </CardFooter>
    </CardDefault>
  ),
}

export const Pricing: Story = {
  render: () => (
    <CardPricing featured style={{ width: 320 }}>
      <CardPricingHeader>
        <CardPricingName>Pro</CardPricingName>
        <CardPricingPrice amount="$19" period="/mo" />
      </CardPricingHeader>
      <CardPricingFeatures>
        <CardPricingFeature>Unlimited components</CardPricingFeature>
        <CardPricingFeature>Priority support</CardPricingFeature>
        <CardPricingFeature included={false}>Self-hosted</CardPricingFeature>
      </CardPricingFeatures>
      <CardPricingCta>
        <ButtonDefault>Upgrade</ButtonDefault>
      </CardPricingCta>
    </CardPricing>
  ),
}
