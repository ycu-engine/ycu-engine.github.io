/* eslint-disable @typescript-eslint/no-explicit-any */

import { CreateSchemaCustomizationArgs, GatsbyNode } from 'gatsby'
import { memberName } from '../../data/member'
import { teamName } from '../../data/team'

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  async ({
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
        description: String
        skills: [MemberSkill!] @link(by: "memberName", from: "name")
        teams: [TeamMember!] @link(by: "memberName", from: "name")
        contributions: [Contribution!] @link(by: "memberName", from: "name")
        belongs: MemberBelongs!
        position: Posision
        isGraduated: Boolean
        activities: [Mdx!]
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
        activities: [Mdx!]
        members: [TeamMember!]! @link(by: "teamName", from: "name")
      }

      type MdxFrontmatter {
        team: Team @link(by: "name", from: "teamName")
        participants: [Member] @link(by: "name")
        duration: Int @sub(left: "endTime", right: "startTime")
        startTime: String @timeFormat
        endTime: String @timeFormat
        author: Member @link(by: "name")
      }
    `)
  }
