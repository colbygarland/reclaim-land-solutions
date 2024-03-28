import { FAQ } from '../components/FAQ'
import { H2, H3 } from '../components/Headings'
import { Hero } from '../components/Hero'
import { MediaBlock } from '../components/MediaBlock'
import { P } from '../components/Elements'
import { Popout } from '../components/Popout'
import { Section } from '../components/Section'
import { FAQs } from '../data/faqs'

export default function About() {
  return (
    <>
      <Hero title="About Us" media="/image-placeholder-4.avif" condensed />
      <Section>
        <H3>
          <span className="text-primary-600">Who are we?</span>
        </H3>
        <H2>Reclaim Land Solutions</H2>
        <P>We take unstable, or underutilized land, and help create solutions to increase productivity.</P>
        <P>
          Decades of research and innovation that has been tested in some real harsh environments. There is a need for
          mulchers that use less power, while performing the same work and require less maintenance.
        </P>
        <P>
          With the ever increasing cost of agricultural land, farmers want to utilize every acre available. Whether it
          is trees, brush, or low laying wet areas, Reclaim Land Solutions wants to provide farmers with the ability to
          reclaim and work the land they already own.
        </P>
      </Section>
      <Section padding="bottom">
        <Popout
          title="Why us?"
          description="With years of experience in forestry, construction and agriculture, we understand the needs of these industries and are ready to determine the best solution for your situation. We are problem solvers who pursue innovative solutions to meet your specific needs."
          imageSrc="/placeholder-image-2.jpeg"
          imageAlt="Mulcher"
        />
      </Section>
      <Section padding="bottom">
        <MediaBlock
          title="Mulcher Sales"
          description="Decades of research and innovation that has been tested in some real harsh environments. There is a need for
          mulchers that use less power, while performing the same work and require less maintenance."
          videoSrc="https://www.youtube.com/embed/As3I3FypY9M"
        />
      </Section>
      <Section backgroundImage="/placeholder-image-5.jpg">
        <Popout
          title="Nolan Dyck"
          description="Thank you to Reclaim Land Solutions for the demo tonight with your new Seppi M. USA mulcher, and the launching of your Seppi dealership here in Grande Prairie. It is great to see the continued growth of our forestry and Ag. develop here in the North!"
          imageSrc="/image-placeholder-4.avif"
          imageAlt="Mulcher"
          imageAlignment="right"
          color="white"
          isTestimonial
        />
      </Section>
      <Section type="tertiary">
        <div id="faqs">
          <H2>Frequently Asked Questions</H2>
          {FAQs.map(({ question, answer }) => {
            return <FAQ key={question} question={question} answer={answer} />
          })}
        </div>
      </Section>
    </>
  )
}
