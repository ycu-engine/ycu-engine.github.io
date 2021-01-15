import type { IndexQueryQuery } from '@gql'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import * as React from 'react'

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

interface IndexPageProps {
  data: IndexQueryQuery
}

const IndexPage = ({ data }: IndexPageProps): JSX.Element => {
  return (
    <div>
      <h1>Hi people</h1>
      <p>
        Welcome to your new <strong>{data.site?.siteMetadata?.title}</strong>{' '}
        site.
      </p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export default IndexPage
