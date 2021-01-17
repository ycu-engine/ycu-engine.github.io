import { members } from '@/data/member'
import * as React from 'react'

type MarkdownUserProps = {
  name: string
}

export const MarkdownUser = ({ name }: MarkdownUserProps): JSX.Element => {
  const user = React.useMemo(
    () => members.find((member) => member.name === name),
    [name]
  )

  if (!user) {
    return (
      <>
        {' '}
        <span>{`@${name}`}</span>{' '}
      </>
    )
  }
  return (
    <>
      {' '}
      <span>{`@${name}`}</span>{' '}
    </>
  )
}
