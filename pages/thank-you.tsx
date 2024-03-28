import { Hero } from '../components/Hero'
import { PHONE_NUMBER } from '../constants'

export default function ThankYou() {
  return (
    <>
      <Hero
        title="Thank You"
        description={`We will be in touch as soon as we are available to. If you wish to speak to somebody right now, please call ${PHONE_NUMBER}`}
        media="/placeholder-image-2.jpeg"
        condensed
      />
    </>
  )
}
