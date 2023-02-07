import { Button } from '../components/Button';
import { H2, H3 } from '../components/Headings';
import { Hero } from '../components/Hero';
import { MediaBlock } from '../components/MediaBlock';
import { P } from '../components/P';
import { Section } from '../components/Section';

export default function Home() {
  return (
    <>
      <Hero
        title="Reclaim Land Solutions LTD"
        description="We take unstable, or underutilized land, and help create solutions to increase productivity."
        media="/video-placeholder.mp4"
        isVideo
        buttonLink="/services"
        buttonText="Our Services"
      />
      <Section>
        <H3>Who are we?</H3>
        <H2>Better Mulchers, Continuously Innovated.</H2>
        <P>
          Decades of research and innovation that has been tested in some real harsh environments. There is a need for
          mulchers that use less power, while performing the same work and require less maintenance.
        </P>
        <Button href="/about">Read More</Button>
      </Section>
      <Section padding="bottom">
        <MediaBlock
          title="What do we do?"
          description="With the ever increasing cost of agricultural land, farmers want to utilize every acre available. Whether it
          is trees, brush, or low laying wet areas, Reclaim Land Solutions wants to provide farmers with the ability to
          reclaim and work the land they already own."
          imageSrc="/placeholder-image.jpeg"
          imageAlt="Mulcher"
        />
      </Section>
    </>
  );
}
