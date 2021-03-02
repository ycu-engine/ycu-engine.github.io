import type { PageHeaderQuery } from '@gql'
import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { ImageWrapper } from './image-wrapper'

type PageHeaderProps = {
  pageName: 'members'
  className?: string
}

export const PageHeader = ({
  pageName,
  ...props
}: PageHeaderProps): JSX.Element => {
  const images = useStaticQuery<PageHeaderQuery>(graphql`
    query PageHeader {
      allFile(filter: { relativeDirectory: { eq: "site" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          name
        }
      }
    }
  `)

  const image = React.useMemo(() => {
    const image = images.allFile.nodes.find(
      (node) => node.name === `${pageName}-header`
    )
    if (image?.childImageSharp) {
      return image.childImageSharp
    }
    throw Error(`Image site/${pageName}-header.{png,jpeg...} not found!`)
  }, [images, pageName])

  return <ImageWrapper {...props} file={image.gatsbyImageData} alt="" />
}
