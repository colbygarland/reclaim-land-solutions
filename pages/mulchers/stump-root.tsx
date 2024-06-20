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
    title: 'Kastor',
    description: 'Stump grinder for stumps any diameter 80-180 HP. Stump grinder with rotating cutting disk.',
    image: '/stump-root/kastor.jpeg',
    link: '/mulchers/stump-root/kastor',
  },
  {
    title: 'FC',
    description:
      'Stump grinder for PTO tractors 70-130 HP. Grinds stumps of small trees, prepares the soil for the planting of new trees.',
    image: '/stump-root/fc.jpeg',
    link: '/mulchers/stump-root/fc',
  },
  {
    title: 'Star FC',
    description: 'Stump grinder 120-260 HP. Multi-purpose tiller - more than just a stump grinder!',
    image: '/stump-root/star-fc.jpeg',
    link: '/mulchers/stump-root/star-fc',
  },
  {
    title: 'Midi Kastor Hyd',
    description: 'Stump grinder for excavators from 5-15 T. To fit on a hydraulic excavator arm.',
    image: '/stump-root/midi-kastor-hyd.jpeg',
    link: '/mulchers/stump-root/midi-kastor-hyd',
  },
  {
    title: 'Kastor Hyd',
    description: 'Stump grinder for excavators 15-30 T. To fit on a hydraulic excavator arm.',
    image: '/stump-root/kastor-hyd.jpeg',
    link: '/mulchers/stump-root/kastor-hyd',
  },
  {
    title: 'Star FC Hyd',
    description: 'Stump grinder for excavators 15-35 T. Grinds and mulches wood up to 40cm.',
    image: '/stump-root/star-fc-hyd.jpeg',
    link: '/mulchers/stump-root/star-fc-hyd',
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
        title="Stump and Root Grinders"
        description="Stump and root grinders for excavators, skid steers, and compact loaders."
        media="/stump-root/fc-cover.jpeg"
        condensed
      />
      <Section padding="top">
        <MediaBlock
          title="Seppi M StarFC 100"
          subtitle="Mulch Anything, Anywhere"
          description="View product in action."
          videoSrc="https://www.youtube.com/embed/WmE5Piw0YtM?si=iGiOKt23aMxaWfVE"
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
