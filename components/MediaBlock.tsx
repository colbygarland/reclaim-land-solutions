import Image from 'next/image'
import React from 'react'
import { H2, H3 } from './Headings'
import { P } from './Elements'
import { YoutubeEmbed } from './YoutubeEmbed'

type ImageAlignment = 'left' | 'right'

export const MediaBlock = ({
  title,
  subtitle,
  description,
  button,
  imageSrc,
  imageAlt,
  imageAlignment = 'left',
  videoSrc,
}: {
  title: string
  subtitle?: string
  description: string
  button?: React.ReactNode
  imageSrc?: string
  imageAlt?: string
  imageAlignment?: ImageAlignment
  videoSrc?: string
}) => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
      <div className={`mb-4 ${imageAlignment === 'left' ? 'lg:order-1' : 'lg:order-2'}`}>
        {imageSrc && imageAlt && <Image alt={imageAlt} src={imageSrc} width={600} height={450} />}
        {videoSrc && <YoutubeEmbed videoSrc={videoSrc} />}
      </div>
      <div className={`${imageAlignment === 'left' ? 'lg:order-2' : 'lg:order-'}`}>
        {subtitle && (
          <H3>
            <span className="text-primary-600">{subtitle}</span>
          </H3>
        )}
        <H2>{title}</H2>
        <P>{description}</P>
        {button && button}
      </div>
    </div>
  )
}
