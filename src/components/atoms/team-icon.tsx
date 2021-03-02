import { TeamName } from '@/data/team'
import { SIZE, SIZE_TYPE } from '@/lib/size'
import type { TeamIconQuery } from '@gql'
import { graphql, Link, useStaticQuery } from 'gatsby'
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
  className,
  ...props
}) => {
  const files = useStaticQuery<TeamIconQuery>(graphql`
    query TeamIcon {
      svgs: allFile(
        filter: {
          relativeDirectory: { eq: "team-images" }
          extension: { in: ["svg"] }
        }
      ) {
        nodes {
          name
          publicURL
        }
      }
      images: allFile(
        filter: {
          relativeDirectory: { eq: "team-images" }
          extension: { nin: ["svg"] }
        }
      ) {
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

  const image = React.useMemo(() => {
    const svg = files.svgs.nodes.find((node) => node.name === teamName)
    if (svg) return svg
    const image = files.images.nodes.find((node) => node.name === teamName)
    if (image) return image[size]
    const defaultImage = files.images.nodes.find(
      (node) => node.name === 'default'
    )
    if (defaultImage) return defaultImage[size]
    throw Error('Default Image not found')
  }, [teamName, files, size])

  const nonNullImage = React.useMemo(() => {
    if (image) return image
    throw Error(`image is ${image}`)
  }, [image])

  return (
    <Link to={`/team/${teamName}`} className={className}>
      <ImageWrapper
        {...props}
        file={nonNullImage}
        alt={`${teamName}のアイコン`}
        width={SIZE[size]}
        height={SIZE[size]}
      />
    </Link>
  )
}
