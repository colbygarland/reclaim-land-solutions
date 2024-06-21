import { EMAIL_ADDRESS, PHONE_NUMBER } from '../constants'
import { Section } from './Section'

export const Footer = () => {
  return (
    <footer className="bg-primary-600 text-white py-3">
      <Section padding="none">
        <div className="lg:flex justify-between">
          <p>
            <small>
              Reclaim Land Solutions. <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a> |{' '}
              <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
            </small>
          </p>
          <p>
            <small>
              Website by{' '}
              <a
                className="font-bold transition duration-150 hover:text-gray-300"
                href="https://colbygarland.vercel.app/"
                target="_blank"
              >
                Colby Garland
              </a>
            </small>
          </p>
        </div>
      </Section>
    </footer>
  )
}
