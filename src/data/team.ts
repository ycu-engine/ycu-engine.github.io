import { MemberName } from './member'

export const teamName = ['DataAnalitics', 'Web', 'Beginner'] as const

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
    name: 'Web',
    nameJa: 'Web開発チーム',
    members: [{ memberName: 'YutaUra', leader: true }],
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
