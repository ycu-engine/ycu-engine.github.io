import type { TeamsPageQuery } from '@gql'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import * as React from 'react'

export const pageQuery = graphql`
  query TeamsPage {
    allTeam {
      nodes {
        id
        name
        nameJa
        members {
          id
          member {
            name
          }
          leader
        }
      }
    }
  }
`

interface TeamsPageProps {
  data: TeamsPageQuery
}

const TeamsPage = ({ data }: TeamsPageProps): JSX.Element => {
  return (
    <div>
      <h1>チーム一覧</h1>
      <ul>
        {data.allTeam.nodes.map((team) => (
          <li key={team.id}>
            {team.nameJa}
            <ul>
              {team.members.map((teamMember) => (
                <li key={teamMember.id}>{teamMember.member.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p>Now go build something great.</p>
      <Link to="/">Go to Top</Link>
    </div>
  )
}

export default TeamsPage
