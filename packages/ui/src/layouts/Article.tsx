import React from 'react'

export interface LayoutArticleProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

export function LayoutArticle({ children, className, ...props }: LayoutArticleProps) {
  return (
    <article className={['promptui-layout-article', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </article>
  )
}