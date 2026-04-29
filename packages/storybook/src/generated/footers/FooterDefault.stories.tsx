import type { Meta, StoryObj } from '@storybook/react'
import { FooterDefault, FooterColumns, FooterColumn, FooterColumnTitle, FooterLinks, FooterLink, FooterBottom, FooterCopyright, FooterLegalLinks, FooterSocial } from '@getpromptui/ui'

const meta: Meta<typeof FooterDefault> = {
  title: 'Generated/Footers/Default',
  component: FooterDefault,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof FooterDefault>

export const Default: Story = {
  render: () => (
    <FooterDefault>
      <FooterColumns>{'Footer text'}</FooterColumns>
      <FooterColumn>{'Footer text'}</FooterColumn>
      <FooterColumnTitle>{'Card title'}</FooterColumnTitle>
      <FooterLinks>{'Home'}</FooterLinks>
      <FooterLink>{'Home'}</FooterLink>
      <FooterBottom>{'Footer text'}</FooterBottom>
      <FooterCopyright>{'Footer text'}</FooterCopyright>
      <FooterLegalLinks>{'Home'}</FooterLegalLinks>
      <FooterSocial>{'Footer text'}</FooterSocial>
    </FooterDefault>
  ),
}
