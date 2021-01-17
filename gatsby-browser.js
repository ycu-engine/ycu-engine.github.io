import { I18nProvider } from '@/components/context/i18n'
import { MarkdownProvider } from '@/components/context/Markdown'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const wrapRootElement = ({ element }) => {
  return (
    <I18nProvider>
      <MarkdownProvider>{element}</MarkdownProvider>
    </I18nProvider>
  )
}
