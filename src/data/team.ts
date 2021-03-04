import { MemberName } from './member'

export const teamName = [
  'DataAnalitics',
  'WebDev',
  'Beginner',
  'AppDev',
] as const

export type TeamName = typeof teamName[number]

export interface TeamMember {
  memberName: MemberName
  leader?: boolean
}

export interface Team {
  name: TeamName
  nameJa: string
  members: readonly TeamMember[]
}

export const teams: readonly Team[] = [
  {
    name: 'DataAnalitics',
    nameJa: 'データ分析チーム',
    members: [
      { memberName: 'YutaUra', leader: true },
      { memberName: 'YoshiyukiKobayashi' },
      { memberName: 'YosukeMuroi' },
      { memberName: 'MarinMiwa' },
      { memberName: 'TakashiNemoto' },
    ],
  },
  {
    name: 'WebDev',
    nameJa: 'Web開発チーム',
    members: [{ memberName: 'YutaUra', leader: true }],
  },
  {
    name: 'AppDev',
    nameJa: 'アプリ開発チーム',
    members: [
      { memberName: 'TakashiNemoto', leader: true },
      { memberName: 'KotaroTakamori' },
      { memberName: 'YutaUra' },
      { memberName: 'TsuyoshiMatsumaru' },
      { memberName: 'ShoKohiyama' },
    ],
  },
  {
    name: 'Beginner',
    nameJa: 'ビギナーチーム',
    members: [
      { memberName: 'FujiharuKawahara' },
      { memberName: 'KakeruSato' },
      { memberName: 'KentaroMorota' },
      { memberName: 'TsuyoshiMatsumaru' },
      { memberName: 'RenAgo' },
    ],
  },
]
