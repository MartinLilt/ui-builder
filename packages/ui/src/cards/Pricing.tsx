import React from 'react'

export interface CardPricingProps extends React.HTMLAttributes<HTMLDivElement> {
  featured?: boolean
  children?: React.ReactNode
}

export function CardPricing({ featured = false, children, className, ...props }: CardPricingProps) {
  return (
    <div
      data-featured={featured || undefined}
      className={[
        'promptui-card-pricing',
        featured ? 'promptui-card-pricing--featured' : null,
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardPricingHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-card-pricing-header', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

export function CardPricingName({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={['promptui-card-pricing-name', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </h3>
  )
}

export interface CardPricingPriceProps extends React.HTMLAttributes<HTMLDivElement> {
  amount?: React.ReactNode
  period?: React.ReactNode
  children?: React.ReactNode
}

export function CardPricingPrice({ amount, period, children, className, ...props }: CardPricingPriceProps) {
  return (
    <div className={['promptui-card-pricing-price', className].filter(Boolean).join(' ')} {...props}>
      {children ?? (
        <>
          {amount !== undefined && <span className="promptui-card-pricing-amount">{amount}</span>}
          {period !== undefined && <span className="promptui-card-pricing-period">{period}</span>}
        </>
      )}
    </div>
  )
}

export function CardPricingFeatures({ children, className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={['promptui-card-pricing-features', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </ul>
  )
}

export interface CardPricingFeatureProps extends React.LiHTMLAttributes<HTMLLIElement> {
  included?: boolean
  children?: React.ReactNode
}

export function CardPricingFeature({ included = true, children, className, ...props }: CardPricingFeatureProps) {
  return (
    <li
      data-included={included}
      className={[
        'promptui-card-pricing-feature',
        included ? null : 'promptui-card-pricing-feature--excluded',
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </li>
  )
}

export function CardPricingCta({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={['promptui-card-pricing-cta', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}