import { MemberName } from './member'

export const portfolioName = ['ycu-schedule'] as const
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
]
