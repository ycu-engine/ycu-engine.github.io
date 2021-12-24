import { MemberIcon } from '@/components/atoms/member-icon'
import { GithubIcon, TwitterIcon } from '@/components/atoms/social-icons'
import { GithubLink, TwitterLink } from '@/components/atoms/social-link'
import { TeamIcon } from '@/components/atoms/team-icon'
import { Section } from '@/components/molecules/section'
import { SEO } from '@/components/organisms/SEO'
import { MemberName } from '@/data/member'
import type { MemberTemplateQuery } from '@gql'
import { graphql, Link } from 'gatsby'
import { sortBy } from 'lodash-es'
import * as React from 'react'

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
        id
        portfolio {
          id
          name
          nameJa
        }
      }
      description
      isGraduated
      joinedAt
      name
      nameJa
      position
      skills {
        level
        id
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
      activities {
        id
        frontmatter {
          title
          date
          team {
            name
            nameJa
            id
          }
        }
      }
    }
  }
`

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
    <>
      <SEO
        title={`${member.nameJa} | メンバー`}
        keywords={[member.name, member?.nameJa]}
      />
      <section className="px-8 py-6">
        <div>
          <MemberIcon
            className="rounded-full"
            memberName={member.name as MemberName}
            size="xl"
          />
        </div>

        <div className="mb-3">
          <p>
            {member.nameJa}
            <span className="text-sm ml-3">
              {member.belongs.faculty.nameJa} {member.belongs.grade}年
            </span>
          </p>
          <p className="px-5 text-sm">{member.description}</p>
        </div>

        <div className="mb-3 flex flex-row justify-around max-w-sm">
          {member.social?.twitter ? (
            <div className="">
              <TwitterIcon size="xs" className="inline" />
              <TwitterLink username={member.social.twitter} />
            </div>
          ) : null}
          {member.social?.github ? (
            <div className="">
              <GithubIcon size="xs" className="inline" />
              <GithubLink username={member.social.github} />
            </div>
          ) : null}
        </div>

        <Section title="所属チーム">
          <ul className="mb-1">
            {member.teams?.map?.((team) => (
              <li key={team.id}>
                <TeamIcon teamName={team.team.name} size="xs" />
                <Link
                  className="hover:underline"
                  to={`/teams/${team.team.name}`}
                >
                  {team.leader ? '🚩' : <span className="inline-block w-4" />}
                  {team.team.nameJa || team.team.name}
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="スキル">
          <ul className="mb-1">
            {member.skills?.map?.((skill) => (
              <li key={skill.id}>
                {skill.skill.name} lv.{skill.level}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="ポートフォリオ">
          <ul className="mb-1">
            {member.contributions?.map?.((contribution) => (
              <li key={contribution.id}>
                {contribution.portfolio.nameJa || contribution.portfolio.name}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="活動記録">
          <ul className="mb-1">
            {sortBy(member.activities ?? [], 'frontmatter.date')
              ?.reverse()
              ?.slice(0, 5)
              ?.map?.((activity) => (
                <li key={activity?.id}>
                  {activity?.frontmatter?.date}{' '}
                  {activity?.frontmatter?.team ? (
                    <>
                      <Link
                        className="hover:underline"
                        to={`/teams/${activity.frontmatter.team.name}`}
                      >
                        {activity.frontmatter.team.nameJa ||
                          activity.frontmatter.team.name}
                      </Link>{' '}
                    </>
                  ) : null}
                  {activity?.frontmatter?.title}{' '}
                </li>
              ))}
          </ul>
        </Section>
      </section>
    </>
  )
}
export default MemberTemplate
