import { Hero } from '@/components/atoms/hero-image'
import { SEO } from '@/components/organisms/SEO'
import * as React from 'react'

// export const pageQuery = graphql`
//   query IndexQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `

// interface IndexPageProps {
//  data: IndexQueryQuery
// }

const IndexPage = (): JSX.Element => {
  return (
    <>
      <SEO title={`ようこそ`} />
      {/* <div className="relative"> */}
      {/* <HeroImage /> */}
      <Hero />
      {/* <p className="absolute top-6 left-10 text-3xl text-main">
          Welcome to Engine!
        </p>
        <ul className="absolute right-0 bottom-0 px-10 py-10 md:right-10">
          <li>
            <Link to="/portfolios">▷ 制作物</Link>
          </li>
          <li>
            <Link to="/about">▷ About</Link>
          </li>
        </ul> */}
      {/* </div> */}
    </>
  )
}

export default IndexPage
