import { Header } from '@/components/organisms/Header'
import * as React from 'react'
import Helmet from 'react-helmet'

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col w-screen h-screen min-h-screen">
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
      <div className="flex-grow-0 flex-shrink-0">
        <Header />
      </div>
      <main className="flex-1">{children}</main>
    </div>
  )
}
