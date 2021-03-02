import { MemberName } from '@/data/member'
import { TeamName } from '@/data/team'
import { MemberInfoFragment } from '@gql'
import { Link } from 'gatsby'
import * as React from 'react'
import { MemberIcon } from '../atoms/member-icon'
import { TeamIcon } from '../atoms/team-icon'

type MemberCardProps = {
  member: MemberInfoFragment
}

export const MemberCard = ({ member }: MemberCardProps): JSX.Element => {
  return (
    <div className="flex">
      <div className="flex justify-center items-center p-3">
        <MemberIcon
          className="rounded-full"
          memberName={member.name as MemberName}
          size="lg"
        />
      </div>
      <div className="flex flex-col p-3 pl-4">
        <div className="text-lg">
          <Link to={`/members/${member.name}`}>{member.nameJa} ▷</Link>
        </div>
        <div className="flex flex-row">
          {member.teams
            ? member.teams.map((team) => (
                <TeamIcon
                  className="mr-1"
                  key={team.id}
                  teamName={team.team.name as TeamName}
                  size="sm"
                />
              ))
            : null}
        </div>
      </div>
    </div>
  )
}
