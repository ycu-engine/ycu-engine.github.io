import * as React from 'react'
import { SectionContent } from '../atoms/section-content'
import { SectionTitle } from '../atoms/section-title'

export const Section: React.FC<{
  title: string
  children: React.ReactNode
}> = ({ children, title }) => {
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{children}</SectionContent>
    </div>
  )
}
