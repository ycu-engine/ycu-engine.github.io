import { ActivityLogPageQuery } from '@gql'
import Link from 'gatsby-link'
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
          <li key={file.id}>{file.childMdx?.frontmatter?.title}</li>
        ))}
      </ol>
      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default ActivityLogPage
