import Image from 'next/image'
import { P } from '../../components/Elements'
import { H2 } from '../../components/Headings'
import { Hero } from '../../components/Hero'
import { Row } from '../../components/Row'
import { Section } from '../../components/Section'
import Link from 'next/link'
import { MediaBlock } from '../../components/MediaBlock'
import { Button } from '../../components/Button'

const attachments = [
  {
    title: 'Midipierre',
    description: 'Stone crusher, 80-130 HP. Keep the field free from stones!',
    image: '/stone-crushers/midipierre.jpeg',
    link: '/mulchers/stone-crushers/midipierre',
  },
  {
    title: 'Midipierre dt',
    description: 'Stone crusher 100-180 HP. The new rock crusher!',
    image: '/stone-crushers/midipierre-dt.jpeg',
    link: '/mulchers/stone-crushers/midipierre-dt',
  },
  {
    title: 'Midisoil dt',
    description: 'Universal stone crusher 100-170 HP.',
    image: '/stone-crushers/midisoil-dt.jpeg',
    link: '/mulchers/stone-crushers/midisoil-dt',
  },
  {
    title: 'Multiforst',
    description: 'Universal forestry tiller-mulcher 140-250 HP. Multiply your possibilities!',
    image: '/stone-crushers/multiforst.jpeg',
    link: '/mulchers/stone-crushers/multiforst',
  },
  {
    title: 'Starsoil',
    description: 'Stone crusher - forestry tiller 180-310 HP. One machine for everything!',
    image: '/stone-crushers/starsoil.jpeg',
    link: '/mulchers/stone-crushers/starsoil',
  },
  {
    title: 'Maxisoil',
    description:
      'Stone crusher - forestry tiller 300-500 HP. The biggest stone crusher, soil tiller and forestry tiller in the world!',
    image: '/stone-crushers/maxisoil.jpeg',
    link: '/mulchers/stone-crushers/maxisoil',
  },
]

const Attachment = ({
  title,
  description,
  image,
  link,
}: {
  title: string
  description: string
  image: string
  link: string
}) => {
  return (
    <div>
      <Link href={link}>
        <Image className="w-56" src={image} alt={title} width={400} height={250} />
        <H2>{title}</H2>
        <P>{description}</P>
      </Link>
    </div>
  )
}

export default function Page() {
  return (
    <>
      <Hero
        title="Stone Crushers and Soil Tillers"
        description="Multi-purpose crushers for PTO tractors. Crushing Stones, mulching wood. Some of the most powerful machines in the Seppi lineup. It is remarkable to watch them work in a wide range of applications!"
        media="/stone-crushers/maxisoil-cover.jpeg"
        condensed
      />
      <Section padding="top">
        <MediaBlock
          title="Seppi M StarSoil 250"
          subtitle="Mulch Anything, Anywhere"
          description="View product in action."
          videoSrc="https://www.youtube.com/embed/UvyQQroeE5A?si=8cSI-2lXsGCvRneC"
          imageAlignment="right"
        />
      </Section>
      <Section>
        <Row>
          {attachments.map((attachment) => (
            <Attachment key={attachment.title} {...attachment} />
          ))}
        </Row>
      </Section>
    </>
  )
}
