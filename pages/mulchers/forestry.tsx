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
    title: 'Microforst PTO',
    description: 'Forestry mulcher for small tractors 30-60 HP. Small but powerful!',
    image: '/forestry/microforst-pto.jpeg',
    link: '/mulchers/forestry/microforst-pto',
  },
  {
    title: 'Miniforst',
    description: 'Small forestry mulcher 60-100 HP.',
    image: '/forestry/miniforst.jpeg',
    link: '/mulchers/forestry/miniforst',
  },
  {
    title: 'Midiforst',
    description: 'Forestry mulcher 80-130 HP. Tree shredder for forestry and vegetation management.',
    image: '/forestry/midiforst.jpeg',
    link: '/mulchers/forestry/midiforst',
  },
  {
    title: 'Midiforst dt',
    description: 'Universal forestry mulcher 120-240 HP. Forestry mulcher for land clearing and vegetation management.',
    image: '/forestry/midiforst-dt.jpeg',
    link: '/mulchers/forestry/midiforst-dt',
  },
  {
    title: 'Starforst',
    description: 'High performance forestry mulcher 180-350 HP. New version since 2018.',
    image: '/forestry/starforst.jpeg',
    link: '/mulchers/forestry/starforst',
  },
  {
    title: 'Maxiforst',
    description:
      'High performance PTO forestry mulcher 300-500 HP. The professional second generation PTO forestry mulcher.',
    image: '/forestry/maxiforst.jpeg',
    link: '/mulchers/forestry/maxiforst',
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
        title="PTO Forestry Mulchers"
        description="Agricultural attachment for PTO tractors for tractors up to 500 HP. Ideal for forestry maintenance."
        media="/forestry/maxiforst-cover.jpeg"
        condensed
      />
      <Section padding="top">
        <MediaBlock
          title="Seppi M MidiForst"
          subtitle="Mulch Anything, Anywhere"
          description="View product in action."
          videoSrc={YOUTUBE_LINKS.forestry}
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
