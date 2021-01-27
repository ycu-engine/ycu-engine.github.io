import { Header } from '@/components/organisms/Header'
import * as React from 'react'
import Helmet from 'react-helmet'

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: 'ja',
        }}
        meta={[
          // { name: 'description', content: '' },
          {
            name: 'keywords',
            content:
              '横浜市立大学,YCU,ycu,横市,サークル,公認サークル,プログラミング',
          },
        ]}
      />
      <Header />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}>
        {children}
      </div>
    </div>
  )
}
