export const SIZE = {
  xxs: 16,
  xs: 24,
  sm: 32,
  md: 48,
  lg: 64,
  xl: 128,
} as const

export type SIZE_TYPE = keyof typeof SIZE
