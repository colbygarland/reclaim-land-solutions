import { Button } from '../components/Button'
import { FAQ } from '../components/FAQ'
import { H2, H3 } from '../components/Headings'
import { Hero } from '../components/Hero'
import { MediaBlock } from '../components/MediaBlock'
import { P } from '../components/Elements'
import { Popout } from '../components/Popout'
import { Section } from '../components/Section'
import { FAQs } from '../data/faqs'
import { useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'
import { DemoDaysModal } from '../components/DemoDaysModal'

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    const seenDemoDays = sessionStorage.getItem('seenDemoDays')
    if (!seenDemoDays) {
      onOpen()
      sessionStorage.setItem('seenDemoDays', 'true')
    }
  }, [])

  return (
    <>
      <Hero
        title="Reclaim Land Solutions LTD"
        description="We take unstable, or underutilized land, and help create solutions to increase productivity."
        media="/seppi-video.mp4#t=0.1"
        poster="/video-poster.jpeg"
        isVideo
        buttonLink="/services"
        buttonText="Our Services"
      />
      <Section type="tertiary">
        <MediaBlock
          title="April 25-27 2023"
          subtitle="Jump in the seat and try it yourself!"
          description="Tractor, excavator and skid steer mulchers in action! From Tuesday April 25 - Thursday April 27, 2023 between 10:00 AM - 2:00 PM MDT in Grande Prairie, AB. Demo larger mulchers capable of crushing 12 inch stones! Don't believe us? Bring your own rocks and try it out yourself. RSVP to receive demo information, location and directions of demo, and to book your spot to try the machine of interest to you and your organization. Click the button below, or contact Dan at 780-518-9914, or dan@rlsltd.ca."
          imageSrc="/demo-days.jpg"
          imageAlt="Seppi M Mulcher Demo days, April 25-27 in Grande Prairie, AB"
          button={
            <Button target="_blank" href="https://www.eventbrite.ca/e/-seppi-m-demo-days--tickets-599448445437">
              Register now!
            </Button>
          }
        />
      </Section>
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
      <Section type="tertiary">
        <MediaBlock
          title="What do we do?"
          subtitle="Reclaim Your Land"
          description="With the ever increasing cost of agricultural land, farmers want to utilize every acre available. Whether it
          is trees, brush, or low laying wet areas, Reclaim Land Solutions wants to provide farmers with the ability to
          reclaim and work the land they already own."
          imageSrc="/placeholder-image.jpeg"
          imageAlt="Mulcher"
          button={<Button href="/contact">Book a Demo</Button>}
          imageAlignment="right"
        />
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
          title="SEPPI M MiniForst"
          subtitle="Mulch Anything, Anywhere"
          description="The SEPPI forestry mulcher for skid steer loaders takes the best qualities from the MiniForst and Midiforst skid steer mulchers and sets a new standard."
          videoSrc="https://www.youtube.com/embed/qmPkNU7prl8"
          imageAlignment="right"
          button={<Button href="/services">View our Mulchers</Button>}
        />
      </Section>
      <Section type="tertiary">
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
          title="Book a Demo"
          description="Reclaim Land Solutions wants to provide farmers the ability to reclaim their land. Whether it is trees, brush, or low laying we areas, RLS will allow you to work the land you already own."
          imageSrc="/image-placeholder-4.avif"
          imageAlt="Mulcher"
          imageAlignment="right"
          color="white"
        />
      </Section>
      <DemoDaysModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
