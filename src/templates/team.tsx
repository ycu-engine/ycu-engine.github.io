import { MemberIcon } from '@/components/atoms/member-icon'
import { TeamIcon } from '@/components/atoms/team-icon'
import { Section } from '@/components/molecules/section'
import { SEO } from '@/components/organisms/SEO'
import { isNotNullUndefined } from '@/lib/filter'
import { TeamTemplateQuery } from '@gql'
import { graphql } from 'gatsby'
import { sortBy } from 'lodash-es'
import * as React from 'react'

export const query = graphql`
  query TeamTemplate($slug: String!) {
    team(id: { eq: $slug }) {
      name
      nameJa
      members {
        id
        leader
        member {
          name
          nameJa
        }
      }
      activities {
        id
        frontmatter {
          title
          date
        }
      }
    }
  }
`

type TeamTemplateProps = {
  data: TeamTemplateQuery
}

const TeamTemplate = ({ data: { team } }: TeamTemplateProps): JSX.Element => {
  if (!team) {
    throw Error('Member not found')
  }
  return (
    <>
      <SEO
        title={`${team.nameJa} | チーム`}
        keywords={[team.name, team.nameJa]}
      />
      <section className="px-8 py-6">
        <div>
          <TeamIcon className="rounded-full" teamName={team.name} size="xl" />
        </div>

        <div>{team.nameJa}</div>

        <Section title="メンバー">
          <ul>
            {team.members.map(({ id, member, leader }) => (
              <li key={id} className="flex flex-row align-baseline">
                {leader ? '🚩' : <span className="inline-block w-4" />}
                <MemberIcon
                  memberName={member.name}
                  size="xs"
                  className="rounded-full"
                />
                {member.nameJa || member.name}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="活動記録">
          <ul>
            {}
            {sortBy(team.activities || [], 'frontmatter.date')
              .filter(isNotNullUndefined)
              .reverse()
              .slice(0, 5)
              .map(({ id, frontmatter }) => (
                <li key={id}>
                  {frontmatter?.date} {frontmatter?.title}
                </li>
              ))}
          </ul>
        </Section>

        {/* <div>
        {member.social?.twitter ? (
          <div>
            <TwitterIcon size="xs" className="inline" />
            <TwitterLink username={member.social.twitter} />
          </div>
        ) : null}
        {member.social?.github ? (
          <div>
            <GithubIcon size="xs" className="inline" />
            <GithubLink username={member.social.github} />
          </div>
        ) : null}
      </div> */}
      </section>
    </>
  )
}
export default TeamTemplate
