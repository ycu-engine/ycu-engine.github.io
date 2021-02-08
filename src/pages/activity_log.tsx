import { ActivityLogPageQuery } from '@gql'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import { Helmet } from 'react-helmet'

export const pageQuery = graphql`
  query ActivityLogPage {
    site {
      siteMetadata {
        title
      }
    }
    allFile(
      filter: { sourceInstanceName: { eq: "activity_log" } }
      sort: {
        fields: [
          childMdx___frontmatter___date
          childMdx___frontmatter___startTime
        ]
        order: [DESC, DESC]
      }
    ) {
      nodes {
        id
        childMdx {
          body
          frontmatter {
            date
            title
            startTime(format: "hh時mm分")
            endTime(format: "hh時mm分")
          }
        }
      }
    }
  }
`

interface ActivityLogPageProps {
  data: ActivityLogPageQuery
}

const ActivityLogPage = ({ data }: ActivityLogPageProps): JSX.Element => {
  return (
    <div>
      <Helmet>
        <title>{`活動記録 | ${data.site?.siteMetadata?.title}`}</title>
      </Helmet>
      <h1>活動記録</h1>
      <div className="p-5">
        <ul>
          {data.allFile.nodes.map((file) => (
            <li key={file.id}>
              <h2 className="text-xl mb-3">
                {file.childMdx?.frontmatter?.title}
              </h2>
              <h3 className="text-lg mb-2">
                {file.childMdx?.frontmatter?.date}(
                {file.childMdx?.frontmatter?.startTime}~
                {file.childMdx?.frontmatter?.endTime})
              </h3>
              {file.childMdx?.body ? (
                <MDXRenderer>{file.childMdx.body}</MDXRenderer>
              ) : null}
              <hr className="my-4 border-t-2" />
            </li>
          ))}
        </ul>
      </div>
      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default ActivityLogPage
