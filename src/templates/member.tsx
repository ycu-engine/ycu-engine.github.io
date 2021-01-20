import { MemberIcon } from '@/components/atoms/member-icon'
import { MemberName } from '@/data/member'
import type { MemberTemplateQuery } from '@gql'
import { graphql, Link } from 'gatsby'
import * as React from 'react'

type MemberTemplateProps = {
  data: MemberTemplateQuery
}

const MemberTemplate = ({
  data: { member },
}: MemberTemplateProps): JSX.Element => {
  if (!member) {
    throw Error('Member not found')
  }
  return (
    <div>
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

export const query = graphql`
  query MemberTemplate($slug: String!) {
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
