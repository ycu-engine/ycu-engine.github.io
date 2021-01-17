export const skillName = ['python'] as const
export type SkillName = typeof skillName[number]
export type Skill = {
  name: SkillName
  description: string
}
export const skills: readonly Skill[] = [
  {
    name: 'python',
    description: 'プログラミング言語Pythonのスキル。',
  },
]
