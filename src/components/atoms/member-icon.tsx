import { MemberName } from '@/data/member'
import { SIZE_TYPE } from '@/lib/size'
import type { MemberIconQuery } from '@gql'
import { graphql, Link, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { ImageWrapper } from './image-wrapper'

type MemberIconProps = {
  memberName: MemberName
  size: SIZE_TYPE
  className?: string
}

export const MemberIcon: React.FC<MemberIconProps> = ({
  memberName,
  size,
  ...props
}) => {
  const files = useStaticQuery<MemberIconQuery>(graphql`
    query MemberIcon {
      allFile(filter: { relativeDirectory: { eq: "member-images" } }) {
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
    const membersOne = files.allFile.nodes.find(
      (node) => node.name === memberName
    )
    if (membersOne) return membersOne
    const defaultImage = files.allFile.nodes.find(
      (node) => node.name === 'default'
    )
    if (defaultImage) return defaultImage
    throw Error('Default Image not found')
  }, [memberName, files])
  const image = React.useMemo(() => {
    const image = fixedImage[size]
    if (!image) throw Error("Image can't resolved")
    return image
  }, [fixedImage, size])

  return (
    <Link to={`/members/${memberName}`}>
      <ImageWrapper
        {...props}
        image={image.gatsbyImageData}
        alt={`${memberName}のアイコン`}
      />
    </Link>
  )
}
