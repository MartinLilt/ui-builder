import React from 'react'

export interface CardInteractiveAsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined
  children?: React.ReactNode
}

export interface CardInteractiveAsAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children?: React.ReactNode
}

export type CardInteractiveProps = CardInteractiveAsButtonProps | CardInteractiveAsAnchorProps

export function CardInteractive(props: CardInteractiveProps) {
  const { children, className } = props
  const baseClass = ['promptui-card-interactive', className].filter(Boolean).join(' ')

  if (props.href !== undefined) {
    const { href, ...rest } = props as CardInteractiveAsAnchorProps
    return (
      <a href={href} className={baseClass} {...rest}>
        {children}
      </a>
    )
  }

  const { ...rest } = props as CardInteractiveAsButtonProps
  return (
    <button type="button" className={baseClass} {...rest}>
      {children}
    </button>
  )
}