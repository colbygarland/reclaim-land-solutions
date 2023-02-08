import React from 'react'

export const P = ({ children, styles }: { children: React.ReactNode; styles?: string }) => {
  return <p className={`text-lg leading-7 mb-4 ${styles}`}>{children}</p>
}
