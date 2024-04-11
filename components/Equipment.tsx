import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Hero } from './Hero'
import { Section } from './Section'
import { H2, H3 } from './Headings'
import { P } from './Elements'
import { Button, buttonType, defaultButtonStyles } from './Button'
import { PHONE_NUMBER } from '../constants'
import { Row } from './Row'
import { List } from './List'
import { InputGroup } from './InputGroup'

export function Equipment({
  equipment,
  features,
  featureTitle,
  options,
  brochure,
  title,
  image,
  content,
}: {
  equipment?: string[]
  features: string[]
  featureTitle: string
  options?: string[]
  brochure?: string
  title: string
  image: string
  content: React.ReactNode
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  return (
    <>
      <Hero title={title} media={image} condensed />
      {router.query.success && (
        <Section type="tertiary">
          <H2>Thank you for your interest</H2>
          <P>We will be in touch shortly.</P>
        </Section>
      )}
      <Section>
        {content}
        <div className="flex justify-center lg:gap-4 flex-col lg:flex-row">
          <Button onClick={onOpen}>Buy now</Button>
          <Button href="/contact">Book a demo</Button>
          {brochure && (
            <Button href={brochure} target="_blank">
              Download the Brochure
            </Button>
          )}
          <Button href={`tel:${PHONE_NUMBER}`}>Call for info</Button>
        </div>
      </Section>
      <Section type="tertiary">
        <Row columns={2}>
          <div>
            <H3>{featureTitle}</H3>
            <List items={features} />
          </div>
          {options && (
            <div>
              <H3>Options</H3>
              <List items={options} />
              {equipment && (
                <>
                  <H3>Under canopy equipment</H3>
                  <List items={equipment} />
                </>
              )}
            </div>
          )}
        </Row>
      </Section>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="bg-gray-100">
            <ModalHeader>Buy Now</ModalHeader>
            <ModalBody>
              <form name="buy-now" method="POST" data-netlify="true" action={`${router.asPath}?success=1`}>
                <input type="hidden" name="form-name" value="buy-now" />
                <InputGroup name="name" label="Name" required />
                <InputGroup name="email" label="Email Address" required />
                <InputGroup name="phone" label="Phone Number" type="tel" required />
                <InputGroup name="equipment" label="Equipment" defaultValue={title} required />
                <button type="submit" className={`${defaultButtonStyles} ${buttonType['primary']}`}>
                  Submit
                </button>
              </form>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </>
  )
}
