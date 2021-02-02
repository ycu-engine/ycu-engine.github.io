import { TeamName } from '@/data/team'
import type { TeamIconQuery } from '@gql'
import { graphql, useStaticQuery } from 'gatsby'
import Img, { GatsbyImageProps } from 'gatsby-image'
import * as React from 'react'

type TeamIconProps = Pick<GatsbyImageProps, 'className'> & {
  teamName: TeamName
  size: 'sm' | 'md' | 'lg' | 'xl'
}

export const TeamIcon: React.FC<TeamIconProps> = ({
  teamName,
  size,
  ...props
}) => {
  const files = useStaticQuery<TeamIconQuery>(graphql`
    query TeamIcon {
      allFile(filter: { relativeDirectory: { eq: "team-images" } }) {
        nodes {
          name
          sm: childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
          md: childImageSharp {
            fixed(width: 48, height: 48) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
          lg: childImageSharp {
            fixed(width: 64, height: 64) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
          xl: childImageSharp {
            fixed(width: 128, height: 128) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  `)
  const fixedImage = React.useMemo(() => {
    const teamsOne = files.allFile.nodes.find((node) => node.name === teamName)
    if (teamsOne) return teamsOne
    const defaultImage = files.allFile.nodes.find(
      (node) => node.name === 'default'
    )
    if (defaultImage) return defaultImage
    throw Error('Default Image not found')
  }, [teamName, files])
  const image = React.useMemo(() => {
    const image = fixedImage[size]?.fixed
    if (!image) throw Error("Image can't resolved")
    return image
  }, [fixedImage, size])

  return (
    <Img
      {...props}
      fixed={{
        ...image,
        base64: image.base64 || undefined,
        srcWebp: image.srcSetWebp || undefined,
        srcSetWebp: image.srcSetWebp || undefined,
      }}
    />
  )
}
