import { ActivityLogPageQuery } from '@gql'
import Link from 'gatsby-link'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'

export const pageQuery = graphql`
  query ActivityLogPage {
    allFile(
      filter: { sourceInstanceName: { eq: "activity_log" } }
      sort: { fields: childMdx___frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        childMdx {
          body
          frontmatter {
            date
            title
            startTime
            endTime
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
      <h1>活動記録</h1>
      <ol>
        {data.allFile.nodes.map((file) => (
          <li key={file.id}>
            <h2>{file.childMdx?.frontmatter?.title}</h2>
            {file.childMdx?.body ? (
              <MDXRenderer>{file.childMdx.body}</MDXRenderer>
            ) : null}
          </li>
        ))}
      </ol>
      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default ActivityLogPage
