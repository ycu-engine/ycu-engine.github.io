import type { MembersPageQuery } from '@gql'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import * as React from 'react'

export const pageQuery = graphql`
  query MembersPage {
    activeMemvers: allMember(filter: { isGraduated: { ne: true } }) {
      nodes {
        ...MemberFragment
      }
    }
    graduatedMembers: allMember(filter: { isGraduated: { eq: true } }) {
      nodes {
        ...MemberFragment
      }
    }
  }

  fragment MemberFragment on Member {
    name
    position
    nameJa
    id
    joinedAt
    belongs {
      faculty {
        name
        nameJa
        id
      }
      grade
    }
    skills {
      level
      skill {
        name
        id
      }
      id
    }
    teams {
      id
      team {
        name
        id
      }
      leader
    }
  }
`

interface MembersPageProps {
  data: MembersPageQuery
}

const MembersPage = ({ data }: MembersPageProps): JSX.Element => {
  return (
    <div>
      <h1>メンバー一覧</h1>
      <h2>現役メンバー</h2>
      <ul>
        {data.activeMemvers.nodes.map((member) => (
          <li key={member.id}>
            {member.nameJa} {member.position}
          </li>
        ))}
      </ul>
      <h2>卒業したメンバー</h2>
      <ul>
        {data.graduatedMembers.nodes.map((member) => (
          <li key={member.id}>
            {member.nameJa} {member.position}
          </li>
        ))}
      </ul>

      <p>Now go build something great.</p>
      <Link to="/">Go to Top</Link>
    </div>
  )
}

export default MembersPage
