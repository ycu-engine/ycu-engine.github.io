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
      <>
        <Header />
      </>
      <div>{children}</div>
    </div>
  )
}
