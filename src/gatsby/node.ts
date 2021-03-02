import type {
  CreateResolversArgs,
  CreateSchemaCustomizationArgs,
  GatsbyNode,
  SourceNodesArgs,
} from 'gatsby'
import { resolve } from 'path'
import { faculties } from '../data/faculty'
import { memberName, members } from '../data/member'
import { portfolios } from '../data/portfolio'
import { skills } from '../data/skills'
import { teamName, teams } from '../data/team'

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage },
}) => {
  const result = await graphql<{
    allMember: { nodes: [{ id: string; name: string }] }
    allTeam: { nodes: [{ id: string; name: string }] }
  }>(/* GraphQL */ `
    query CreatePages {
      allMember {
        nodes {
          id
          name
        }
      }
      allTeam {
        nodes {
          id
          name
        }
      }
    }
  `)
  if (result.data) {
    result.data.allMember.nodes.forEach(({ id, name }) => {
      createPage({
        path: `/members/${name}`,
        component: resolve('src/templates/member.tsx'),
        context: {
          slug: id,
        },
      })
    })
    result.data.allTeam.nodes.forEach(({ id, name }) => {
      createPage({
        path: `/team/${name}`,
        component: resolve('src/templates/team.tsx'),
        context: {
          slug: id,
        },
      })
    })
  }
}

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
  actions: { createTypes, createFieldExtension },
  schema,
}: CreateSchemaCustomizationArgs) => {
  createFieldExtension({
    name: 'sub',
    args: {
      left: 'String!',
      right: 'String!',
    },
    extend(options: { left: string; right: string }) {
      return {
        type: 'Int',
        resolve(source: any) {
          const left = source[options.left]
          const right = source[options.right]
          if (typeof left !== 'number' || typeof right !== 'number') {
            throw Error('sub: left または rightの値が数値ではありません')
          }
          return left - right
        },
      }
    },
  })
  createFieldExtension({
    name: 'timeFormat',
    args: {
      format: { type: 'String!', defaultValue: 'hh:mm' },
    },
    extend(options: { format: string }) {
      return {
        type: 'String',
        args: {
          format: { type: 'String!', defaultValue: options.format },
        },
        resolve(source: any, args: any, context: any, info: any) {
          const defaultValue = Number(
            context.defaultFieldResolver(source, args, context, info)
          )
          const minutes = defaultValue % 60
          const hour = Math.floor(defaultValue / 60)
          const format = args.format || options.format
          const twoDigitPadding = (num: number): string =>
            num < 10 ? `0${num}` : `${num}`
          return format
            .replace(/hh/g, twoDigitPadding(hour))
            .replace(/mm/g, twoDigitPadding(minutes))
        },
      }
    },
  })

  createTypes([
    schema.buildEnumType({
      name: 'TeamName',
      values: Object.fromEntries(teamName.map((v) => [v, { value: v }])),
    }),
    schema.buildEnumType({
      name: 'MemberName',
      values: Object.fromEntries(memberName.map((v) => [v, { value: v }])),
    }),
  ])

  createTypes(/* GraphQL */ `
    type Member implements Node {
      name: MemberName!
      skills: [MemberSkill!] @link(by: "memberName", from: "name")
      teams: [TeamMember!] @link(by: "memberName", from: "name")
      contributions: [Contribution!] @link(by: "memberName", from: "name")
      belongs: MemberBelongs!
      position: Posision
      isGraduated: Boolean
      activities: [Mdx]
    }

    enum Posision {
      Leader
      SubLeader
      Goblin
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
      memberName: MemberName!
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
      name: TeamName!
      members: [TeamMember!]! @link(by: "teamName", from: "name")
    }

    type MdxFrontmatter {
      team: Team @link(by: "name", from: "teamName")
      participants: [Member] @link(by: "name")
      duration: Int @sub(left: "endTime", right: "startTime")
      startTime: String @timeFormat
      endTime: String @timeFormat
    }
  `)
}

export const createResolvers: GatsbyNode['createResolvers'] = async ({
  createResolvers,
}: CreateResolversArgs) => {
  createResolvers({
    Member: {
      activities: {
        type: ['Mdx'],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve(source: { name: string }, _args: unknown, context: any) {
          return context.nodeModel
            .getAllNodes({ type: 'Mdx' })
            .filter(
              (log: { frontmatter?: { participants?: string[] } }) =>
                log.frontmatter?.participants?.includes?.(source.name) || false
            )
        },
      },
    },
  })
}
