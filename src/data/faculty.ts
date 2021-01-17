export const facultyName = ['DataScienceUndergraduate'] as const
export type FacultyName = typeof facultyName[number]

export type Faculty = {
  name: FacultyName
  nameJa: string
}

export const faculties: readonly Faculty[] = [
  {
    name: 'DataScienceUndergraduate',
    nameJa: 'データサイエンス学部',
  },
]
