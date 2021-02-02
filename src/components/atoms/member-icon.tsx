import { MemberName } from '@/data/member'
import { SIZE_TYPE } from '@/lib/size'
import type { MemberIconQuery } from '@gql'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img, { GatsbyImageProps } from 'gatsby-image'
import * as React from 'react'

type MemberIconProps = Pick<GatsbyImageProps, 'className'> & {
  memberName: MemberName
  size: SIZE_TYPE
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
            fixed(width: 16, height: 16) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
          xs: childImageSharp {
            fixed(width: 24, height: 24) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
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
    const image = fixedImage[size]?.fixed
    if (!image) throw Error("Image can't resolved")
    return image
  }, [fixedImage, size])

  return (
    <Link to={`/members/${memberName}`}>
      <Img
        {...props}
        fixed={{
          ...image,
          base64: image.base64 || undefined,
          srcWebp: image.srcSetWebp || undefined,
          srcSetWebp: image.srcSetWebp || undefined,
        }}
      />
    </Link>
  )
}
