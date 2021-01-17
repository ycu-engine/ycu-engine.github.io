import { MarkdownUser } from '@/components/molecules/MarkdownUser'
import { MDXProvider } from '@mdx-js/react'
import * as React from 'react'

const shortcodes = { User: MarkdownUser }

export const MarkdownProvider: React.FC = ({ children }) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
)
