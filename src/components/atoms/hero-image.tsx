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
            ...GatsbyImageSharpFluid
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
        height: '500px',
      }}
      {...props}
      fluid={{
        ...image.file.childImageSharp.fluid,
        base64: image.file.childImageSharp.fluid.base64 || undefined,
      }}
      imgStyle={{
        objectFit: 'cover',
        height: 500,
      }}
    />
  )
}
