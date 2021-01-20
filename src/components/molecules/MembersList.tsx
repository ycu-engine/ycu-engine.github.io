import { MemberName } from '@/data/member'
import * as React from 'react'

type MemberListMember = {
  name: MemberName
}

type MemberListProps = {
  members: MemberListMember[]
}

export const MemberList = ({ members }: MemberListProps): JSX.Element => {
  return (
    <div>
      {members.map((member) => (
        <div key={member.name}>{member.name}</div>
      ))}
    </div>
  )
}
