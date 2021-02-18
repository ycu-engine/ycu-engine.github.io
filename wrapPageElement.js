import { I18nProvider } from '@/components/context/i18n'
import { MarkdownProvider } from '@/components/context/Markdown'
import { Layout } from '@/layouts'
import React from 'react'
import { RecoilRoot } from 'recoil'
import 'tailwindcss/tailwind.css'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const wrapRootElement = ({ element }) => {
  return (
    <RecoilRoot>
      <I18nProvider>
        <MarkdownProvider>
          <Layout>{element}</Layout>
        </MarkdownProvider>
      </I18nProvider>
    </RecoilRoot>
  )
}

export default wrapRootElement
