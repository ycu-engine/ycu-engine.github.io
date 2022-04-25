import * as React from 'react'

export const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <h3 className="text-xl font-bold mb-2">{children}</h3>
}
