import { File, ImageSharp } from '@gql'
import {
  GatsbyImage,
  GatsbyImageProps as _GatsbyImageProps,
} from 'gatsby-plugin-image'
import * as React from 'react'

export type GatsbyImageFileType = Pick<ImageSharp, 'gatsbyImageData'>
export type ImageFileType = Pick<File, 'publicURL'>

type GatsbyImageProps = Omit<_GatsbyImageProps, 'image' | 'alt'> & {
  file: GatsbyImageFileType
  alt: string
}

type ImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'placeholder' | 'src' | 'srcSet' | 'alt'
> & { file: ImageFileType; alt: string }

type ImageWrapperProps = GatsbyImageProps | ImageProps

const propsIsGatsbyImageProps = (
  props: ImageWrapperProps
): props is GatsbyImageProps => {
  return Object.keys(props.file).includes('gatsbyImageData')
}
export const ImageWrapper = (props: ImageWrapperProps): JSX.Element => {
  if (propsIsGatsbyImageProps(props)) {
    const { file, ...rest } = props
    return <GatsbyImage {...rest} image={file.gatsbyImageData} />
  }
  const { file, ...rest } = props
  return <img {...rest} src={file.publicURL || undefined} />
}
