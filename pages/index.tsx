import { Button } from '../components/Button'
import { FAQ } from '../components/FAQ'
import { H2, H3 } from '../components/Headings'
import { Hero } from '../components/Hero'
import { MediaBlock } from '../components/MediaBlock'
import { P } from '../components/P'
import { Popout } from '../components/Popout'
import { Section } from '../components/Section'
import { FAQs } from '../data/faqs'

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
        <H3>
          <span className="text-primary-600">Who are we?</span>
        </H3>
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
          subtitle="Reclaim Your Land"
          description="With the ever increasing cost of agricultural land, farmers want to utilize every acre available. Whether it
          is trees, brush, or low laying wet areas, Reclaim Land Solutions wants to provide farmers with the ability to
          reclaim and work the land they already own."
          imageSrc="/placeholder-image.jpeg"
          imageAlt="Mulcher"
          button={<Button href="/contact">Book a Demo</Button>}
        />
      </Section>
      <Section padding="bottom">
        <Popout
          title="Why us?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua."
          imageSrc="/placeholder-image-2.jpeg"
          imageAlt="Mulcher"
        />
      </Section>
      <Section padding="bottom">
        <MediaBlock
          title="Lorem Ipsum"
          subtitle="Consectetur adipiscing"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          "
          imageSrc="/placeholder-image-3.png"
          imageAlt="Mulcher"
          imageAlignment="right"
          button={<Button href="/services">View our Mulchers</Button>}
        />
      </Section>
      <Section padding="bottom">
        <H3>
          <span className="text-primary-600">What kind of Mulchers?</span>
        </H3>
        <H2>Frequently Asked Questions</H2>
        <div className="mt-10">
          {FAQs.map(({ question, answer }) => {
            return <FAQ key={question} question={question} answer={answer} />
          })}
        </div>
        <Button href="/about#faqs">View More</Button>
      </Section>
      <Section backgroundImage="/placeholder-image-5.jpg">
        <Popout
          title="Why us?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua."
          imageSrc="/image-placeholder-4.avif"
          imageAlt="Mulcher"
          imageAlignment="right"
          color="white"
        />
      </Section>
    </>
  )
}
