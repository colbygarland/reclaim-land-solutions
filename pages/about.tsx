import { FaCheckCircle, FaDollarSign, FaHandsHelping } from 'react-icons/fa'
import { FAQ } from '../components/FAQ'
import { H2, H3 } from '../components/Headings'
import { Hero } from '../components/Hero'
import { IconCard } from '../components/IconCard'
import { MediaBlock } from '../components/MediaBlock'
import { P } from '../components/P'
import { Section } from '../components/Section'
import { FAQs } from '../data/faqs'

export default function About() {
  return (
    <>
      <Hero title="About Us" media="/image-placeholder-4.avif" condensed />
      <Section type="tertiary">
        <H3>
          <span className="text-primary-600">Who are we?</span>
        </H3>
        <H2>Reclaim Land Solutions</H2>
        <P>We take unstable, or underutilized land, and help create solutions to increase productivity.</P>
      </Section>
      <Section>
        <H2>Our Services</H2>
        <div className="md:grid md:grid-cols-3 md:gap-8">
          <IconCard
            title="Service Number One"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            icon={<FaDollarSign />}
          />
          <IconCard
            title="Service Number Two"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            icon={<FaHandsHelping />}
          />
          <IconCard
            title="Service Number Three"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            icon={<FaCheckCircle />}
          />
        </div>
      </Section>
      <Section padding="bottom">
        <MediaBlock
          title="Mulcher Sales"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          videoSrc="https://www.youtube.com/embed/As3I3FypY9M"
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
