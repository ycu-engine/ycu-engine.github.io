import { TeamIcon } from '@/components/atoms/team-icon'
import { TeamTemplateQuery } from '@gql'
import { graphql, Link } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'

export const query = graphql`
  query TeamTemplate($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    team(id: { eq: $slug }) {
      name
      nameJa
    }
  }
`

type TeamTemplateProps = {
  data: TeamTemplateQuery
}

const TeamTemplate = ({
  data: { team, site },
}: TeamTemplateProps): JSX.Element => {
  if (!team) {
    throw Error('Member not found')
  }
  return (
    <div>
      <Helmet>
        <title>{`${team.nameJa} | チーム | ${site?.siteMetadata?.title}`}</title>
      </Helmet>
      <div>
        <Link to="/team">▷ チーム一覧</Link>
      </div>

      <div>
        <TeamIcon className="rounded-full" teamName={team.name} size="xl" />
      </div>

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

      <div>{team.nameJa}</div>
    </div>
  )
}
export default TeamTemplate
