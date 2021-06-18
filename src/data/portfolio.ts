import { MemberName } from './member'

export const portfolioName = [
  'ycu-schedule',
  'signate_gakkyoku',
  'craftbeer-app',
] as const
export type PortfolioName = typeof portfolioName[number]

export type Portfolio = {
  name: PortfolioName
  nameJa: string
  contributors: MemberName[]
}

export const portfolios: readonly Portfolio[] = [
  {
    name: 'ycu-schedule',
    nameJa: 'YCUスケジュール',
    contributors: ['YutaUra'],
  },
  {
    name: 'signate_gakkyoku',
    nameJa: 'SIGNATE楽曲分析＿銅メダル入賞',
    contributors: ['KentaroMorota', 'KakeruSato'],
  },
  {
    name: 'craftbeer-app',
    nameJa: 'ビアコレ',
    contributors: ['TsuyoshiMatsumaru'],
  },
]
