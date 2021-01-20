import type { PageHeaderQuery } from '@gql'
import { graphql, useStaticQuery } from 'gatsby'
import Img, { GatsbyImageProps } from 'gatsby-image'
import * as React from 'react'

type PageHeaderProps = Pick<GatsbyImageProps, 'className'> & {
  pageName: 'members'
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  pageName,
  ...props
}) => {
  const images = useStaticQuery<PageHeaderQuery>(graphql`
    query PageHeader {
      allFile(filter: { relativeDirectory: { eq: "site" } }) {
        nodes {
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid
            }
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
    if (image?.childImageSharp?.fluid) {
      return image.childImageSharp.fluid
    }
    throw Error(`Image site/${pageName}-header.{png,jpeg...} not found!`)
  }, [images, pageName])

  return (
    <Img
      style={{
        height: '200px',
      }}
      {...props}
      fluid={{
        ...image,
        base64: image.base64 || undefined,
      }}
      imgStyle={{
        objectFit: 'cover',
        height: 200,
      }}
    />
  )
}
