import { Hero } from '../components/Hero'
import { Section } from '../components/Section'
import { YoutubeEmbed } from '../components/YoutubeEmbed'
import { YOUTUBE_LINKS } from '../constants'

export default function Page() {
  return (
    <>
      <Hero title="Resources" media="/rental-cover.jpg" condensed />
      <Section>
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
          <YoutubeEmbed videoSrc={YOUTUBE_LINKS.stoneCrushers} />
          <YoutubeEmbed videoSrc={YOUTUBE_LINKS.hydraulic} />
          <YoutubeEmbed videoSrc={YOUTUBE_LINKS.forestry} />
          <YoutubeEmbed videoSrc={YOUTUBE_LINKS.excavator} />
          <YoutubeEmbed videoSrc={YOUTUBE_LINKS.stump} />
          <YoutubeEmbed videoSrc={YOUTUBE_LINKS.flail} />
        </div>
      </Section>
    </>
  )
}
