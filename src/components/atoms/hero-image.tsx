import type { HeroImageQuery } from '@gql'
import { graphql, useStaticQuery } from 'gatsby'
import Img, { GatsbyImageProps } from 'gatsby-image'
import * as React from 'react'

type HeroImageProps = Pick<GatsbyImageProps, 'className'>

export const HeroImage: React.FC<HeroImageProps> = ({ ...props }) => {
  const image = useStaticQuery<HeroImageQuery>(graphql`
    query HeroImage {
      file(relativePath: { eq: "site/hero.png" }) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  if (!image.file?.childImageSharp?.fluid) {
    throw Error('Hero Image not found')
  }
  return (
    <Img
      style={{
        height: 'calc(100vh - 72px)',
      }}
      {...props}
      fluid={{
        ...image.file.childImageSharp.fluid,
        base64: image.file.childImageSharp.fluid.base64 || undefined,
        srcWebp: image.file.childImageSharp.fluid.srcSetWebp || undefined,
        srcSetWebp: image.file.childImageSharp.fluid.srcSetWebp || undefined,
      }}
      imgStyle={{
        objectFit: 'cover',
        height: 'calc(100vh - 72px)',
      }}
    />
  )
}
