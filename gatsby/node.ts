import type {
  CreateSchemaCustomizationArgs,
  GatsbyNode,
  SourceNodesArgs,
} from 'gatsby'
import { faculties } from '../src/data/faculty'
import { members } from '../src/data/member'
import { portfolios } from '../src/data/portfolio'
import { skills } from '../src/data/skills'
import { teams } from '../src/data/team'

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

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = async ({
  actions: { createTypes },
}: CreateSchemaCustomizationArgs) => {
  createTypes(/* GraphQL */ `
    type Member implements Node {
      skills: [MemberSkill!] @link(by: "memberName", from: "name")
      teams: [TeamMember!] @link(by: "memberName", from: "name")
      contributions: [Contribution!] @link(by: "memberName", from: "name")
      belongs: MemberBelongs!
      position: Posision
      isGraduated: Boolean
    }

    enum Posision {
      Leader
      SubLeader
    }

    type Contribution implements Node {
      portfolio: Portfolio! @link(by: "name", from: "portfolioName")
      member: Member! @link(by: "name", from: "memberName")
    }

    type Portfolio implements Node {
      contributors: [Contribution!]! @link(by: "portfolioName", from: "name")
    }

    type MemberBelongs {
      facultyName: String!
      faculty: Faculty! @link(by: "name", from: "facultyName")
      memberName: String!
      member: Member! @link(by: "name", from: "memberName")
      grade: Int!
    }

    type Faculty implements Node {
      members: [Member!] @link(by: "belongs.facultyName", from: "name")
    }

    type MemberSkill implements Node {
      skill: Skill! @link(by: "name", from: "skillName")
      member: Member! @link(by: "name", from: "memberName")
      level: Int
    }

    type Skill implements Node {
      members: [MemberSkill!] @link(by: "skillName", from: "name")
    }

    type TeamMember implements Node {
      member: Member! @link(by: "name", from: "memberName")
      team: Team! @link(by: "name", from: "teamName")
    }

    type Team implements Node {
      members: [TeamMember!]! @link(by: "teamName", from: "name")
    }

    type MdxFrontmatter {
      team: Team @link(by: "name", from: "teamName")
      participants: [Member] @link(by: "name")
    }
  `)
}
