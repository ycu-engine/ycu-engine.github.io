import { PageHeader } from '@/components/atoms/page-header'
import { MemberCard } from '@/components/molecules/MemberCard'
import { Tab } from '@/components/organisms/Tab'
import type { MembersPageQuery } from '@gql'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import * as React from 'react'
import { Helmet } from 'react-helmet'

export const pageQuery = graphql`
  query MembersPage {
    site {
      siteMetadata {
        title
      }
    }
    activeMemvers: allMember(filter: { isGraduated: { ne: true } }) {
      nodes {
        ...memberInfo
      }
    }
    graduatedMembers: allMember(filter: { isGraduated: { eq: true } }) {
      nodes {
        ...memberInfo
      }
    }
  }

  fragment memberInfo on Member {
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
      <Helmet>
        <title>{`メンバー | ${data.site?.siteMetadata?.title}`}</title>
      </Helmet>
      <PageHeader pageName="members" />
      <div className="flex flex-col my-5 mx-5">
        <h1 className="text-center text-3xl">メンバー一覧</h1>
        <p className="text-base px-8 md:px-16 lg:px-32">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          quod eveniet repellendus delectus doloribus excepturi recusandae,
          provident porro modi adipisci facilis reiciendis accusamus tempore,
          quisquam cumque magni ea. Aliquam, debitis.
        </p>
      </div>

      <div className="container px-4 mx-auto">
        <Tab
          tabs={['現役', 'OB']}
          items={{
            現役: data.activeMemvers.nodes,
            OB: data.graduatedMembers.nodes,
          }}>
          {(member) => <MemberCard member={member} key={member.id} />}
        </Tab>

        <Link to="/">Go to Top</Link>
      </div>
    </div>
  )
}

export default MembersPage
