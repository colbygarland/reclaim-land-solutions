import Image from 'next/image'
import { P } from '../../components/Elements'
import { H2 } from '../../components/Headings'
import { Hero } from '../../components/Hero'
import { Row } from '../../components/Row'
import { Section } from '../../components/Section'
import Link from 'next/link'

const attachments = [
  {
    title: 'SMWA rev cf',
    description: 'Flail mulcher for PTO/tractor 30-90 HP. Versatile, agile, strong, reliable.',
    image: '/flails/smwa-rev-cf.jpg',
    link: '/mulchers/flail/smwa-rev-cf',
  },
  {
    title: 'SMWA s',
    description: 'Flail mulcher for PTO/Tractor 30-90 HP. Mulching mower for orchards and vineyards.',
    image: '/flails/smwa-s.jpg',
    link: '/mulchers/flail/smwa-s',
  },
  {
    title: 'SMWA slim',
    description: 'Ultra slim flail for orchards and vineyards for 40-90 HP. Ultra low, and slim belt drive.',
    image: '/flails/smwa-slim.jpg',
    link: '/mulchers/flail/smwa-slim',
  },
  {
    title: 'SMWO',
    description: 'Versatile flail mulcher 30-90 HP. Large sideshift.',
    image: '/flails/smwo.jpg',
    link: '/mulchers/flail/smwo',
  },
  {
    title: 'S7 classic',
    description: 'Universal flail mulcher 50-120 HP. Mulches grass and prunings up to 7cm.',
    image: '/flails/s7-classic.jpg',
    link: '/mulchers/flail/s7-classic',
  },
  {
    title: 'S7 compact',
    description: 'Flail mulcher for vineyards and orchards 50-120 HP. Center of gravity close to the tractor.',
    image: '/flails/s7-compact.jpg',
    link: '/mulchers/flail/s7-compact',
  },
  {
    title: 'S7 base',
    description: 'Universal flail mulcher 50-160 HP. Mulcher for agriculture and landscape maintenance.',
    image: '/flails/s7-base.jpg',
    link: '/mulchers/flail/s7-base',
  },
  {
    title: 'S7 dyna',
    description: 'Universal flail mulcher 50-160 HP. The successor to the SMO fh.',
    image: '/flails/s7-dyna.jpg',
    link: '/mulchers/flail/s7-dyna',
  },
  {
    title: 'S9 base',
    description: 'Heavy duty flail mulcher 100-220 HP. Reversible mulcher to mulch grass and prunings up to 9cm.',
    image: '/flails/s9-base.jpg',
    link: '/mulchers/flail/s9-base',
  },
  {
    title: 'S9 dyna',
    description:
      'Heavy duty flail mulcher with side shift 100-220 HP. Reversible mulcher to mulch grass and prunings up to 9cm.',
    image: '/flails/s9-dyna.jpg',
    link: '/mulchers/flail/s9-dyna',
  },
  {
    title: 'S9 coupe',
    description:
      'Flail mulcher with low profile 100-150 HP. Flail mulcher with side shift and low profile to mulch grass and prunings up to 9cm.',
    image: '/flails/s9-coupe.jpg',
    link: '/mulchers/flail/s9-coupe',
  },
  {
    title: 'WBS',
    description: 'Heavy duty flail mulcher 130-250 HP. Heavy weight champion!',
    image: '/flails/wbs.jpg',
    link: '/mulchers/flail/wbs',
  },
  {
    title: 'WBS fh',
    description: 'Heavy duty flail mulcher 130-250 HP. Heavy weight champion!',
    image: '/flails/wbs-fh.jpg',
    link: '/mulchers/flail/wbs-fh',
  },
  {
    title: 'SMWA multipla',
    description: 'Flail mulcher for large areas 80-150 HP. Mulcher for large areas!',
    image: '/flails/smwa-multipla.jpg',
    link: '/mulchers/flail/smwa-multipla',
  },
  {
    title: 'S9 multipla',
    description: 'Large area flail mulcher 100-250 HP. Working width 8 metres.',
    image: '/flails/s9-multipla.jpg',
    link: '/mulchers/flail/s9-multipla',
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

export default function Flail() {
  return (
    <>
      <Hero
        title="Flail Mulchers"
        description="Agricultural attachment for PTO tractors for tractors up to 250 HP"
        media="/flails/s7-base-cover.jpg"
        condensed
      />
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
