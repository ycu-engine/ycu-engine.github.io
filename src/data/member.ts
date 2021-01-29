import { zonedTimeToUtc } from 'date-fns-tz'
import { FacultyName } from './faculty'
import { SkillName } from './skills'

export const memberName = [
  'YutaUra',
  'YoshiyukiKobayashi',
  'YosukeMuroi',
  'MarinMiwa',
  'TakashiNemoto',
  'FujitaItsuki',
  'ShoKohiyama',
  'KotaroTakamori',
  'KentaroMorota',
  'KakeruSato',
  'FujiharuKawahara',
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

export type Position = 'Leader' | 'SubLeader' | 'Goblin'

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
    social: {
      github: 'yoshiyukids',
      twitter: 'yoshiyuki_ds',
    },
    belongs: { facultyName: 'DataScienceUndergraduate', grade: 3 },
  },
  {
    name: 'YosukeMuroi',
    nameJa: '室井 葉介',
    joinedAt: zonedTimeToUtc('2021-01-08', 'Asia/Tokyo'),
    social: { github: 'mur0ii' },
    belongs: { facultyName: 'DataScienceUndergraduate', grade: 3 },
  },
  {
    name: 'MarinMiwa',
    nameJa: '三輪 茉琳',
    joinedAt: zonedTimeToUtc('2021-01-08', 'Asia/Tokyo'),
    belongs: { facultyName: 'DataScienceUndergraduate', grade: 3 },
    social: {
      github: 'ShiroooMARISON',
      twitter: 'ShiroooMARISON',
    },
  },
  {
    name: 'TakashiNemoto',
    nameJa: '根本 貴志',
    joinedAt: zonedTimeToUtc('2021-01-08', 'Asia/Tokyo'),
    belongs: { facultyName: 'DataScienceUndergraduate', grade: 3 },
  },
  {
    name: 'FujitaItsuki',
    nameJa: '藤田樹',
    joinedAt: zonedTimeToUtc('2021-01-08', 'Asia/Tokyo'),
    position: 'Goblin',
    social: {
      github: 'fijita',
      twitter: 'fulfill_Brownie',
    },
    belongs: { facultyName: 'DataScienceUndergraduate', grade: 2 },
    skills: [{ skillName: 'python', level: 3 }],
  },
  {
    name: 'ShoKohiyama',
    nameJa: '小檜山　祥央',
    joinedAt: zonedTimeToUtc('2021-01-28', 'Asia/Tokyo'),
    belongs: { facultyName: 'DataScienceUndergraduate', grade: 3 },
  },
  {
    name: 'KotaroTakamori',
    nameJa: '高森 皓太郎',
    joinedAt: zonedTimeToUtc('2021-01-28', 'Asia/Tokyo'),
    belongs: { facultyName: 'DataScienceUndergraduate', grade: 3 },
  },
  {
    name: 'KentaroMorota',
    nameJa: '諸田　健太朗',
    joinedAt: zonedTimeToUtc('2021-01-29', 'Asia/Tokyo'),
    belongs: { facultyName: 'DataScienceUndergraduate', grade: 1 },
  },
  {
    name: 'KakeruSato',
    nameJa: '佐藤駿',
    joinedAt: zonedTimeToUtc('2021-01-29', 'Asia/Tokyo'),
    belongs: { facultyName: 'DataScienceUndergraduate', grade: 1 },
  },
  {
    name: 'FujiharuKawahara',
    nameJa:'河原富士晴',
    joinedAt: zonedTimeToUtc('2021-01-29', 'Asia/Tokyo'),
    belongs: { facultyName: 'DataScienceUndergraduate', grade: 1 },
  },
]
