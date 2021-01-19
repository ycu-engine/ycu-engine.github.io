import { zonedTimeToUtc } from 'date-fns-tz'
import { FacultyName } from './faculty'
import { SkillName } from './skills'

export const memberName = [
  'YutaUra',
  'YoshiyukiKobayashi',
  'YosukeMuroi',
  'MarinMiwa',
  'TakashiNemoto',
  '<あなたの名前>',
] as const

export type MemberName = typeof memberName[number]

export type MemberFaculty = {
  facultyName: FacultyName
  grade: number
}

export type MemberSkill = {
  skillName: SkillName
  level: 0 | 1 | 2 | 3 | 4 | 5
}

export type Position = 'Leader' | 'SubLeader'

export type SocialAccount = {
  github?: string
  twitter?: string
}

export interface Member {
  name: MemberName
  nameJa: string
  joinedAt: Date
  position?: Position
  social?: SocialAccount
  isGraduated?: boolean
  belongs: MemberFaculty
  skills?: MemberSkill[]
}

export const members: readonly Member[] = [
  {
    name: 'YutaUra',
    nameJa: '浦 優太',
    joinedAt: zonedTimeToUtc('2021-01-08', 'Asia/Tokyo'),
    position: 'Leader',
    social: {
      github: 'YutaUra',
      twitter: '3594914',
    },
    belongs: { facultyName: 'DataScienceUndergraduate', grade: 2 },
    skills: [{ skillName: 'python', level: 3 }],
  },
  {
    name: 'YoshiyukiKobayashi',
    nameJa: '小林 義幸',
    joinedAt: zonedTimeToUtc('2021-01-08', 'Asia/Tokyo'),
    position: 'SubLeader',
    belongs: { facultyName: 'DataScienceUndergraduate', grade: 3 },
  },
  {
    name: 'YosukeMuroi',
    nameJa: '室井 葉介',
    joinedAt: zonedTimeToUtc('2021-01-08', 'Asia/Tokyo'),
    belongs: { facultyName: 'DataScienceUndergraduate', grade: 3 },
  },
  {
    name: 'MarinMiwa',
    nameJa: '三輪 まりん',
    joinedAt: zonedTimeToUtc('2021-01-08', 'Asia/Tokyo'),
    belongs: { facultyName: 'DataScienceUndergraduate', grade: 3 },
  },
  {
    name: 'TakashiNemoto',
    nameJa: '根本 貴志',
    joinedAt: zonedTimeToUtc('2021-01-08', 'Asia/Tokyo'),
    belongs: { facultyName: 'DataScienceUndergraduate', grade: 3 },
  },
  {
    name: '<あなたの名前>',
    nameJa: '日本語の名前',
    joinedAt: zonedTimeToUtc('<今日の日付>', 'Asia/Tokyo'),
    belongs: { facultyName: 'DataScienceUndergraduate', grade: 1 }, // 学部・学年 DS以外の学部の人は要相談
  },
]
