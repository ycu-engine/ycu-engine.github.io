import * as React from 'react'

export const SectionContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="mb-3">{children}</div>
}
