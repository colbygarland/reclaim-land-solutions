import { Section } from './Section'

export const Footer = () => {
  return (
    <footer className="bg-primary-600 text-white py-3">
      <Section padding="none">
        <p>
          <small>
            Reclaim Land Solutions. Website by{' '}
            <a
              className="font-bold transition duration-150 hover:text-gray-300"
              href="https://colbygarland.ca?ref=reclaim"
              target="_blank"
            >
              Colby Garland
            </a>
          </small>
        </p>
      </Section>
    </footer>
  )
}
