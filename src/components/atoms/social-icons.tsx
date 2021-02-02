import { SIZE, SIZE_TYPE } from '@/lib/size'
import * as React from 'react'

type TwitterIconProps = {
  size?: SIZE_TYPE
  className?: string
}

export const TwitterIcon = ({
  size = 'md',
  className = '',
}: TwitterIconProps): JSX.Element => {
  return (
    <img
      className={`${className}`}
      src="/social-icon/twitter.svg"
      alt="twitter"
      width={SIZE[size]}
      height={SIZE[size]}
    />
  )
}

type GithubIconProps = {
  size?: SIZE_TYPE
  className?: string
}

export const GithubIcon = ({
  size = 'md',
  className = '',
}: GithubIconProps): JSX.Element => {
  return (
    <img
      className={`${className}`}
      src="/social-icon/github.svg"
      alt="github"
      width={SIZE[size]}
      height={SIZE[size]}
    />
  )
}
