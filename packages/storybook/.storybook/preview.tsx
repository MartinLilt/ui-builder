import React from 'react'
import type { Preview } from '@storybook/react'
import '@getpromptui/ui/styles.css'
import './preview.css'

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    options: {
      storySort: {
        order: ['Welcome', 'Components', 'Generated'],
      },
    },
    backgrounds: { disable: true },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'PromptUI theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = (context.globals.theme as 'light' | 'dark') ?? 'light'
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', theme)
      }

      const layout = context.parameters?.layout ?? 'padded'
      if (layout === 'fullscreen') {
        return <div className="promptui-sb-fullscreen">{Story()}</div>
      }

      return (
        <div className="promptui-sb-stage" data-layout={layout}>
          <div className="promptui-sb-stage-inner">{Story()}</div>
        </div>
      )
    },
  ],
}

export default preview