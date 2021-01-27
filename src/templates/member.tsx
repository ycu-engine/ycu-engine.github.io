import { MemberIcon } from '@/components/atoms/member-icon'
import { MemberName } from '@/data/member'
import type { MemberTemplateQuery } from '@gql'
import { graphql, Link } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'

export const query = graphql`
  query MemberTemplate($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    member(id: { eq: $slug }) {
      belongs {
        grade
        faculty {
          name
          nameJa
        }
      }
      contributions {
        portfolio {
          id
          name
          nameJa
        }
      }
      isGraduated
      joinedAt
      name
      nameJa
      position
      skills {
        level
        skill {
          id
          description
          name
        }
      }
      social {
        github
        twitter
      }
      teams {
        leader
        id
        team {
          name
          nameJa
        }
      }
    }
  }
`

type MemberTemplateProps = {
  data: MemberTemplateQuery
}

const MemberTemplate = ({
  data: { member, site },
}: MemberTemplateProps): JSX.Element => {
  if (!member) {
    throw Error('Member not found')
  }
  return (
    <div>
      <Helmet>
        <title>{`${member.nameJa} | メンバー | ${site?.siteMetadata?.title}`}</title>
      </Helmet>
      <div>
        <Link to="/members">メンバー一覧</Link>
      </div>

      <div>
        <MemberIcon memberName={member.name as MemberName} size="xl" />
      </div>

      <div>{member.nameJa}</div>
    </div>
  )
}
export default MemberTemplate
