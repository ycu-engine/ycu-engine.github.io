import { SEO } from '@/components/organisms/SEO'
import { EventsPageQuery } from '@gql'
import { graphql, Link } from 'gatsby'
import * as React from 'react'

export const pageQuery = graphql`
  query EventsPage {
    allFile(
      filter: {
        sourceInstanceName: { eq: "events" }
        childrenMdx: { elemMatch: { frontmatter: { private: { ne: true } } } }
      }
      sort: { fields: childrenMdx___frontmatter___createdAt, order: DESC }
    ) {
      nodes {
        id
        name
        childMdx {
          excerpt(truncate: true, pruneLength: 80)
          frontmatter {
            title
            endAt(fromNow: true, locale: "ja")
          }
        }
      }
    }
  }
`

interface EventsPageProps {
  data: EventsPageQuery
}

const EventsPage = ({ data }: EventsPageProps): JSX.Element => {
  return (
    <>
      <SEO title="イベント" />
      <div>
        <div className="p-5">
          <h1 className="text-2xl mb-4">イベント</h1>
          <ul>
            {data.allFile.nodes.map((file) => (
              <li key={file.id}>
                <h2 className="text-xl mb-3">
                  <Link to={`/events/${file.name}`}>
                    {file.childMdx?.frontmatter?.title}
                  </Link>
                </h2>

                {file.childMdx?.frontmatter?.endAt ? (
                  <h3 className="text-lg mb-2">
                    {file.childMdx?.frontmatter.endAt}に終了
                  </h3>
                ) : null}

                {file.childMdx?.excerpt ? (
                  <p>
                    {file.childMdx.excerpt.split('\n').map((v) => (
                      <>
                        {v}
                        <br />
                      </>
                    ))}
                  </p>
                ) : null}
                <hr className="my-4 border-t-2" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default EventsPage
