import Image from 'next/image'
import { P } from '../../components/Elements'
import { H2 } from '../../components/Headings'
import { Hero } from '../../components/Hero'
import { Row } from '../../components/Row'
import { Section } from '../../components/Section'
import Link from 'next/link'
import { MediaBlock } from '../../components/MediaBlock'
import { YOUTUBE_LINKS } from '../../constants'

const attachments = [
  {
    title: 'Miniforst cl',
    description:
      'Forestry mulcher with universal attachment for compact loaders and dozers. 2175-5075 PSI. Forestry mulcher for skid steer loader.',
    image: '/hydraulic/miniforst-cl.jpeg',
    link: '/mulchers/hydraulic/miniforst-cl',
  },
  {
    title: 'Miniforst pick-up cl',
    description: 'Forestry pick-up mulcher for compact loaders 150-300 bar. Strong pick-up mulcher for compact loaders',
    image: '/hydraulic/miniforst-pick-up-cl.jpeg',
    link: '/mulchers/hydraulic/miniforst-pick-up-cl',
  },
  {
    title: 'SMWA skid steer',
    description:
      'Hydraulic flail mulcher for compact loaders 150-300 bar. Hydraulic flail mulcher for compact loaders of different brands.',
    image: '/hydraulic/smwa-skid-steer.jpeg',
    link: '/mulchers/hydraulic/smwa-skid-steer',
  },
  {
    title: 'SMO skid steer',
    description:
      'Flail mulcher for compact loaders 150-250 bar. Strong flail mulcher with SAE skid steer attachment interface',
    image: '/hydraulic/smo-skid-steer.jpeg',
    link: '/mulchers/hydraulic/smo-skid-steer',
  },
  {
    title: 'Microforst cl',
    description:
      'Forestry mulcher for standrd flow compact loaders 150-300 bar. Versatile mulcher for skid steer loaders according to SAE standard.',
    image: '/hydraulic/microforst-cl.jpeg',
    link: '/mulchers/hydraulic/microforst-cl',
  },
  {
    title: 'Midiforst dt hyd',
    description:
      'Universal forstry mulcher hydraulic drive 150-350 bar. Universal wood mulcher for Right of Way management, pipeline maintenance.',
    image: '/hydraulic/midiforst-dt-hyd.jpeg',
    link: '/mulchers/hydraulic/midiforst-dt-hyd',
  },
  {
    title: 'Starforst hyd',
    description:
      'High performance forestry mulcher hydraulic drive 200-350 bar. High performing tree mulcher with universal attachment.',
    image: '/hydraulic/starforst-hyd.jpeg',
    link: '/mulchers/hydraulic/starforst-hyd',
  },
  {
    title: 'Minisoil cl',
    description:
      'Stone crusher and forestry mulcher for compact loaders 150-380 bar. Versatile mulcher for skid steer loaders according to SAE standard.',
    image: '/hydraulic/minisoil-cl.jpeg',
    link: '/mulchers/hydraulic/minisoil-cl',
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
        title="Mulchers for Compact Loaders"
        description="Agricultural attachment for PTO tractors for tractors up to 250 HP"
        media="/hydraulic/microforst-cl-cover.jpeg"
        condensed
      />
      <Section padding="top">
        <MediaBlock
          title="Seppi M MiniForst CL 175"
          subtitle="Mulch Anything, Anywhere"
          description="View product in action."
          videoSrc={YOUTUBE_LINKS.hydraulic}
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
