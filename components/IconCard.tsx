import React from 'react'
import { H4 } from './Headings'

export const IconCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => {
  return (
    <div className="border-gray-100 border-2 p-6 mb-6 last-of-type:mb-0 md:mb-0">
      <div className="text-4xl mb-4">{icon}</div>
      <H4>{title}</H4>
      <p className="text-lg">{description}</p>
    </div>
  )
}
