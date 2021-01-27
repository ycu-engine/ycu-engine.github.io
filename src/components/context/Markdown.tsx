/* eslint-disable react/display-name */
import {
  MarkdownPortfolio,
  MarkdownTeam,
  MarkdownUser,
} from '@/components/molecules/MarkdownObject'
import { MDXProvider } from '@mdx-js/react'
import * as React from 'react'

export const MarkdownProvider: React.FC = ({ children }) => (
  <MDXProvider
    components={{
      user: MarkdownUser,
      team: MarkdownTeam,
      portfolio: MarkdownPortfolio,
      h1: (props) => <h1 {...props} className="text-2xl mt-1 mb-3" />,
      h2: (props) => <h2 {...props} className="text-xl mb-2" />,
      h3: (props) => <h3 {...props} className="text-lg mb-1" />,
      p: (props) => <p {...props} className="text-base text-gray-900" />,
      a: (props) => (
        <a
          {...props}
          className="text-blue-500 hover:text-blue-300 hover:underline"
          target="_blank"
          rel="noreferrer"
        />
      ),
      li: (props) => <li {...props} />,
      ul: (props) => <ul {...props} className="pl-4" />,
      ol: (props) => <ol {...props} className="pl-4" />,
      strong: (props) => <strong {...props} className="font-bold" />,
    }}>
    {children}
  </MDXProvider>
)
