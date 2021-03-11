import { SEO } from '@/components/organisms/SEO'
import { EventTempalteQuery } from '@gql'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import { Helmet } from 'react-helmet'

export const query = graphql`
  query EventTempalte($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    file(id: { eq: $slug }) {
      childMdx {
        body
        excerpt(truncate: true, pruneLength: 80)
        frontmatter {
          title
          createdAt
          keywords
          endAt(locale: "ja", fromNow: true)
          author {
            name
            nameJa
          }
        }
      }
    }
  }
`

type EventTempalteProps = {
  data: EventTempalteQuery
}

export const EventTempalte = ({ data }: EventTempalteProps): JSX.Element => {
  return (
    <>
      <SEO
        title={`${data.file?.childMdx?.frontmatter?.title} | イベント`}
        description={data.file?.childMdx?.excerpt}
        keywords={data.file?.childMdx?.frontmatter?.keywords}
      />
      <Helmet>
        <title>{`${data.file?.childMdx?.frontmatter?.title} | イベント | ${data.site?.siteMetadata?.title}`}</title>
      </Helmet>
      <div className="p-5 md:pl-10 md:pr-20">
        <h1 className="text-2xl mb-4">
          {data.file?.childMdx?.frontmatter?.title}
        </h1>
        <div className="flex flex-row mb-3">
          {data.file?.childMdx?.frontmatter?.author && (
            <p className="mr-4">
              <Link
                className="border-b-2 border-gray-600 "
                to={`/members/${data.file?.childMdx?.frontmatter?.author}`}>
                作成者: {data.file.childMdx.frontmatter.author.nameJa}
              </Link>
            </p>
          )}
          {data.file?.childMdx?.frontmatter?.createdAt && (
            <p className="mr-4">
              作成日: {data.file.childMdx.frontmatter.createdAt}
            </p>
          )}
          {data.file?.childMdx?.frontmatter?.endAt && (
            <p className="mr-4">{data.file.childMdx.frontmatter.endAt}に終了</p>
          )}
        </div>
        {data.file?.childMdx?.body && (
          <MDXRenderer>{data.file.childMdx.body}</MDXRenderer>
        )}
      </div>
    </>
  )
}

export default EventTempalte
