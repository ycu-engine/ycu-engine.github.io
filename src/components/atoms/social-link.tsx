import * as React from 'react'

type TwitterLinkProps = {
  username: string
}

export const TwitterLink = ({ username }: TwitterLinkProps): JSX.Element => {
  return (
    <a
      className="hover:underline"
      href={`https://twitter.com/${username}`}
      target="_blank"
      rel="noreferrer"
    >
      @{username}
    </a>
  )
}

type GithubLinkProps = {
  username: string
}

export const GithubLink = ({ username }: GithubLinkProps): JSX.Element => {
  return (
    <a
      className="hover:underline"
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noreferrer"
    >
      @{username}
    </a>
  )
}
