import { MemberIcon } from '@/components/atoms/member-icon'
import { TeamIcon } from '@/components/atoms/team-icon'
import type { TeamsPageQuery } from '@gql'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import * as React from 'react'
import { Helmet } from 'react-helmet'

export const pageQuery = graphql`
  query TeamsPage {
    site {
      siteMetadata {
        title
      }
    }
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
      <Helmet>
        <title>{`チーム | ${data.site?.siteMetadata?.title}`}</title>
      </Helmet>
      <h1>チーム一覧</h1>
      <ul>
        {data.allTeam.nodes.map((team) => (
          <li key={team.id}>
            <TeamIcon teamName={team.name} size="lg" />
            {team.nameJa}
            <ul>
              {team.members.map((teamMember) => (
                <li key={teamMember.id}>
                  <MemberIcon
                    memberName={teamMember.member.name}
                    size="sm"
                    className="rounded-full"
                  />
                  {teamMember.member.name}
                </li>
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
