import { HTMLInputTypeAttribute } from 'react'
import { buttonType, defaultButtonStyles } from '../components/Button'
import { H2, H3 } from '../components/Headings'
import { Hero } from '../components/Hero'
import { P } from '../components/Elements'
import { Section } from '../components/Section'

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
  return (
    <>
      <Hero title="Contact Us" media="/placeholder-image-2.jpeg" condensed />
      <Section type="tertiary">
        <div className="lg:grid lg:grid-cols-2">
          <div className="">
            <H3>
              <span className="text-primary-600">Lorem Ipsum</span>
            </H3>
            <H2>Lorem Ipsem</H2>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </P>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </P>
          </div>
          <div className="">
            {/* @ts-ignore */}
            <form name="contact" netlify>
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
