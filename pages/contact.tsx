import { HTMLInputTypeAttribute } from 'react'
import { buttonType, defaultButtonStyles } from '../components/Button'
import { H2, H3 } from '../components/Headings'
import { Hero } from '../components/Hero'
import { P } from '../components/Elements'
import { Section } from '../components/Section'
import { ADDRESS, EMAIL_ADDRESS, GOOGLE_MAPS_LINK, PHONE_NUMBER } from '../constants'
import { useRouter } from 'next/router'
import { EmailIcon, ExternalLinkIcon, PhoneIcon } from '@chakra-ui/icons'

const InputGroup = ({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string
  name: string
  type?: HTMLInputTypeAttribute
  required?: boolean
}) => {
  return (
    <div className="mb-6">
      <label className="block font-bold mb-2">
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <input type={type} name={name} required={required} className="px-4 py-3 w-full" />
    </div>
  )
}

export default function Contact() {
  const router = useRouter()
  return (
    <>
      <Hero title="Contact Us" media="/placeholder-image-2.jpeg" condensed />
      <Section type="tertiary">
        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="">
            <H3>
              <span className="text-primary-600">Get in Touch</span>
            </H3>
            <H2>Reclaim Land Solutions</H2>
            <P>
              We would love to hear from you! Please book a demo using the from, or feel free to email us at{' '}
              <a className="font-bold" href={`mailto:${EMAIL_ADDRESS}`}>
                {EMAIL_ADDRESS}
              </a>
            </P>
            <P>
              With years of experience in forestry, construction and agriculture, we understand the needs of these
              industries and are ready to determine the best solution for your situation. We are problem solvers who
              pursue innovative solutions to meet your specific needs.
            </P>
            <ul>
              <li className="mb-2 text-lg">
                <PhoneIcon />{' '}
                <a className="font-bold transition hover:text-primary-500" href={`tel:${PHONE_NUMBER}`}>
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="mb-2 text-lg">
                <EmailIcon />{' '}
                <a className="font-bold transition hover:text-primary-500" href={`mailto:${EMAIL_ADDRESS}`}>
                  {EMAIL_ADDRESS}
                </a>
              </li>
              <li className="mb-2 text-lg">
                <ExternalLinkIcon />{' '}
                <a className="font-bold transition hover:text-primary-500" href={`${GOOGLE_MAPS_LINK}`}>
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>
          <div>
            {router.query.success && (
              <div className="bg-primary-500 p-6 text-white mb-10 rounded">
                <p>
                  <strong>Success!</strong>
                </p>
                <br />
                <p>We have received your message. We will get back to you as soon as possible.</p>
              </div>
            )}
            <form name="contact" method="POST" data-netlify="true" action="/contact?success=1">
              <input type="hidden" name="form-name" value="contact" />
              <InputGroup name="name" label="Name" required />
              <InputGroup name="email" label="Email Address" required />
              <InputGroup name="phone" label="Phone Number" type="tel" required />
              <button type="submit" className={`${defaultButtonStyles} ${buttonType['primary']}`}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  )
}
