import { TeamName } from '@/data/team'
import { SIZE_TYPE } from '@/lib/size'
import type { TeamIconQuery } from '@gql'
import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { ImageWrapper } from './image-wrapper'

type TeamIconProps = {
  teamName: TeamName
  size: SIZE_TYPE
  className?: string
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
          xxs: childImageSharp {
            gatsbyImageData(layout: FIXED, height: 16, width: 16)
          }
          xs: childImageSharp {
            gatsbyImageData(layout: FIXED, height: 24, width: 24)
          }
          sm: childImageSharp {
            gatsbyImageData(layout: FIXED, height: 32, width: 32)
          }
          md: childImageSharp {
            gatsbyImageData(layout: FIXED, height: 48, width: 48)
          }
          lg: childImageSharp {
            gatsbyImageData(layout: FIXED, height: 64, width: 64)
          }
          xl: childImageSharp {
            gatsbyImageData(layout: FIXED, height: 128, width: 128)
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
    const image = fixedImage[size]
    if (!image) throw Error("Image can't resolved")
    return image
  }, [fixedImage, size])

  return (
    <ImageWrapper
      {...props}
      image={image.gatsbyImageData}
      alt={`${teamName}のアイコン`}
    />
  )
}
