import { GatsbyNode, SourceNodesArgs } from 'gatsby'
import { faculties } from '../../data/faculty'
import { members } from '../../data/member'
import { portfolios } from '../../data/portfolio'
import { skills } from '../../data/skills'
import { teams } from '../../data/team'

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}: SourceNodesArgs) => {
  faculties.forEach((faculty) => {
    createNode({
      ...faculty,
      id: createNodeId(`Faculty-${faculty.name}`),
      internal: {
        type: 'Faculty',
        contentDigest: createContentDigest(faculty),
      },
    })
  })
  skills.forEach((skill) => {
    createNode({
      ...skill,
      id: createNodeId(`Skill-${skill.name}`),
      internal: {
        type: 'Skill',
        contentDigest: createContentDigest(skill),
      },
    })
  })
  members.forEach(({ skills, ...member }) => {
    createNode({
      ...member,
      id: createNodeId(`Member-${member.name}`),
      internal: {
        type: 'Member',
        contentDigest: createContentDigest(member),
      },
    })
    if (skills) {
      skills.forEach((memberSkill) => {
        createNode({
          ...memberSkill,
          memberName: member.name,
          id: createNodeId(
            `MemberSkill-${member.name}-${memberSkill.skillName}`
          ),
          internal: {
            type: 'MemberSkill',
            contentDigest: createContentDigest({
              ...memberSkill,
              memberName: member.name,
            }),
          },
        })
      })
    }
  })
  teams.forEach(({ members, ...team }) => {
    createNode({
      ...team,
      id: createNodeId(`Team-${team.name}`),
      internal: {
        type: 'Team',
        contentDigest: createContentDigest(team),
      },
    })
    members.forEach((teamMember) => {
      createNode({
        ...teamMember,
        teamName: team.name,
        id: createNodeId(`TeamMember-${team.name}-${teamMember.memberName}`),
        internal: {
          type: `TeamMember`,
          contentDigest: createContentDigest({
            ...teamMember,
            teamName: team.name,
          }),
        },
      })
    })
  })
  portfolios.forEach(({ contributors, ...portfolio }) => {
    createNode({
      ...portfolio,
      id: createNodeId(`Portfolio-${portfolio.name}`),
      internal: {
        type: 'Portfolio',
        contentDigest: createContentDigest(portfolio),
      },
    })
    contributors.forEach((memberName) => {
      createNode({
        memberName,
        portfolioName: portfolio.name,
        id: createNodeId(`Contribution-${portfolio.name}-${memberName}`),
        internal: {
          type: 'Contribution',
          contentDigest: createContentDigest({
            memberName,
            portfolioName: portfolio.name,
          }),
        },
      })
    })
  })
}
