import React from 'react'

type SectionType = 'primary' | 'secondary' | 'tertiary'
type SectionPadding = 'none' | 'top' | 'bottom' | 'default'

const sectionType = {
  primary: 'bg-primary-300',
  secondary: 'bg-secondary-900 text-white',
  tertiary: 'bg-gray-100',
}

function getVerticalPadding(padding: SectionPadding) {
  switch (padding) {
    case 'none':
      return ''
    case 'top':
      return 'pt-8 lg:pt-32'
    case 'bottom':
      return 'pb-8 lg:pb-32'
    default:
      return 'py-8 lg:py-32'
  }
}

export const Section = ({
  children,
  type,
  padding = 'default',
  backgroundImage = '',
}: {
  children: React.ReactNode
  type?: SectionType
  padding?: SectionPadding
  backgroundImage?: string
}) => {
  return (
    <section className={`relative px-8 lg:px-16 ${getVerticalPadding(padding)} ${type ? sectionType[type] : ''}`}>
      {backgroundImage && (
        <div className="absolute h-full w-full inset-0 z-10">
          <div className="bg-gray-900 opacity-30 h-full w-full absolute" />
          <img src={backgroundImage} alt="" className="h-full w-full inset-0 object-cover" />
        </div>
      )}
      <div className="container mx-auto">
        <div className={`z-20 relative ${backgroundImage && 'shadow'}`}>{children}</div>
      </div>
    </section>
  )
}
