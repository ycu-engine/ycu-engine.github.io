import type { LogoImageQuery } from '@gql'
import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { ImageWrapper } from './image-wrapper'

type LogoImageProps = Omit<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
  'src' | 'width' | 'height' | 'alt'
>

export const LogoImage: React.FC<LogoImageProps> = ({ ...props }) => {
  const image = useStaticQuery<LogoImageQuery>(graphql`
    query LogoImage {
      file(relativePath: { eq: "site/logo.svg" }) {
        publicURL
      }
    }
  `)

  if (!image.file) {
    throw Error('Logo Image not found')
  }

  if (!image.file?.publicURL) {
    throw Error('Logo Image not found')
  }

  return (
    <ImageWrapper
      {...props}
      file={image.file}
      width="200px"
      height="48px"
      alt="Engineのロゴ"
    />
  )
}
