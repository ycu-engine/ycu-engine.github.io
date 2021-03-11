import { SEO } from '@/components/organisms/SEO'
import { PortfoliosPageQuery } from '@gql'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import * as React from 'react'

export const pageQuery = graphql`
  query PortfoliosPage {
    allPortfolio {
      nodes {
        id
        name
        nameJa
        contributors {
          id
          member {
            name
          }
        }
      }
    }
  }
`

interface PortfoliosPageProps {
  data: PortfoliosPageQuery
}

const PortfoliosPage = ({ data }: PortfoliosPageProps): JSX.Element => {
  return (
    <>
      <SEO title={`ポートフォリオ`} />
      <div>
        <h1>ポートフォリオ一覧</h1>
        <ul>
          {data.allPortfolio.nodes.map((portfolio) => (
            <li key={portfolio.id}>
              <h2>{portfolio.nameJa}</h2>
              <ul>
                {portfolio.contributors.map((contributor) => (
                  <li key={contributor.id}>{contributor.member.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p>Now go build something great.</p>
        <Link to="/">Go to Top</Link>
      </div>
    </>
  )
}

export default PortfoliosPage
