import { GatsbyImage, GatsbyImageProps } from 'gatsby-plugin-image'
import * as React from 'react'

type ImageWrapperProps =
  | (Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
      publicURL: string
    })
  | (GatsbyImageProps & { publicURL?: never })

const propsIsGastbyProps = (
  props: ImageWrapperProps
): props is GatsbyImageProps & { publicURL?: never } => {
  return typeof props.publicURL !== 'string'
}

export const ImageWrapper = (props: ImageWrapperProps): JSX.Element => {
  if (propsIsGastbyProps(props)) {
    return <GatsbyImage {...props} />
  }
  return <img {...props} src={props.publicURL} />
}
