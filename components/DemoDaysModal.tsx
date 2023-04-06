import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { Button } from './Button'
import { MediaBlock } from './MediaBlock'

export const DemoDaysModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Seppi M Mulcher Demo Days</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <MediaBlock
            title="April 25-27 2023"
            subtitle="Jump in the seat and try it yourself!"
            description="Tractor, excavator and skid steer mulchers in action! From Tuesday April 25 - Thursday April 27, 2023 between 10:00 AM - 2:00 PM MDT in Grande Prairie, AB. Demo larger mulchers capable of crushing 12 inch stones! Don't believe us? Bring your own rocks and try it out yourself. RSVP to receive demo information, location and directions of demo, and to book your spot to try the machine of interest to you and your organization. Click the button below, or contact Dan at 780-518-9914.
          "
            imageSrc="/demo-days.jpg"
            imageAlt="Seppi M Mulcher Demo days, April 25-27 in Grande Prairie, AB"
            button={
              <Button target="_blank" href="https://www.eventbrite.ca/e/-seppi-m-demo-days--tickets-599448445437">
                Register now!
              </Button>
            }
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
