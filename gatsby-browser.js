import { MarkdownProvider } from '@/components/organisms/Markdown'
import React from 'react'
import { I18nProvider } from './src/components/context/i18n'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const wrapRootElement = ({ element }) => {
  return (
    <I18nProvider>
      <MarkdownProvider>{element}</MarkdownProvider>
    </I18nProvider>
  )
}
