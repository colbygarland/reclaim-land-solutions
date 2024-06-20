import Image from 'next/image'
import { P } from '../../components/Elements'
import { H2 } from '../../components/Headings'
import { Hero } from '../../components/Hero'
import { Row } from '../../components/Row'
import { Section } from '../../components/Section'
import Link from 'next/link'
import { MediaBlock } from '../../components/MediaBlock'

const attachments = [
  {
    title: 'H3',
    description:
      'Mulching mower - attachment for mini excavators 150-300 bar. Mulching attachment for excavators from 2-5 t.',
    image: '/excavator/h3.jpg',
    link: '/mulchers/excavator/h3',
  },
  {
    title: 'H-SMO-B',
    description: 'Mulching mower - attachment for excavator 150-250 bar. Mulching mower for excavators from 5-13 t.',
    image: '/excavator/h-smo-b.jpeg',
    link: '/mulchers/excavator/h-smo-b',
  },
  {
    title: 'Mini BMS',
    description:
      'Strong mulcher with fixed hammers suitable for excavators and railway vehicles 200-350 bar. Suitable for excavators or forwarders from 10-20 t.',
    image: '/excavator/mini-bms.jpeg',
    link: '/mulchers/excavator/mini-bms',
  },
  {
    title: 'BMS L',
    description:
      'Forestry mulcher BMS-L 150-250 bar | 90-150 l/min [2,175-3,626 psi | 23-40 gpm]. Mulching attachment for excavators up 7 to 15 t',
    image: '/excavator/bms-l.jpeg',
    link: '/mulchers/excavator/bms-l',
  },
  {
    title: 'BMS F',
    description:
      'Strong mulcher with fixed hammers suitable for excavators and railway vehicles. Suitable for excavators or forwarders from 10 to 20 t.',
    image: '/excavator/bms-f.jpeg',
    link: '/mulchers/excavator/bms-f',
  },
  {
    title: 'E20 Direct',
    description:
      'Forestry mulcher for excavator 12-21 t. Mulching head with direct transmission for continuous use - never change belts agian!',
    image: '/excavator/e20-direct.jpeg',
    link: '/mulchers/excavator/e20-direct',
  },
  {
    title: 'BMS',
    description:
      'Strong mulcher attachment for excavator 200-350 bar. Forestry mulcher suitable for excavators or forwarders 15-30 t.',
    image: '/excavator/bms.jpeg',
    link: '/mulchers/excavator/bms',
  },
  {
    title: 'Super BMS',
    description:
      'High performance forestry mulcher for excavators or forwarders 200-350 bar. Heavy mulching attachment for excavators from 25-45 t.',
    image: '/excavator/super-bms.jpeg',
    link: '/mulchers/excavator/super-bms',
  },
  {
    title: 'Midi-Kastor hyd',
    description: 'Stump grinder for excavators from 5-15 t.',
    image: '/excavator/midi-kastor-hyd.jpeg',
    link: '/mulchers/excavator/midi-kastor-hyd',
  },
  {
    title: 'Kastor hyd',
    description: 'Stump grinder for excavators from 15-30 t.',
    image: '/excavator/kastor-hyd.jpeg',
    link: '/mulchers/excavator/kastor-hyd',
  },
  {
    title: 'Star-FC hyd',
    description: 'Stump grinder for excavators up to 15-35 t. Grinds and mulches wood up to 40 cm.',
    image: '/excavator/star-fc-hyd.jpeg',
    link: '/mulchers/excavator/star-fc-hyd',
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
        title="Excavator Mulchers"
        description="Agricultural attachment for excavators from 2-45 tons. Ideal for forestry maintenance."
        media="/excavator/bms-f-cover.jpeg"
        condensed
      />
      <Section padding="top">
        <MediaBlock
          title="Seppi M BMS-F and H3"
          subtitle="Mulch Anything, Anywhere"
          description="View product in action."
          videoSrc="https://www.youtube.com/embed/ey0L6WYxjFQ?si=WfavdC_zJytgcC0J"
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
