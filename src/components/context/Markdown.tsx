import {
  MarkdownPortfolio,
  MarkdownTeam,
  MarkdownUser,
} from '@/components/molecules/MarkdownObject'
import { MDXProvider } from '@mdx-js/react'
import * as React from 'react'

const shortcodes = {
  user: MarkdownUser,
  team: MarkdownTeam,
  portfolio: MarkdownPortfolio,
}

export const MarkdownProvider: React.FC = ({ children }) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
)
