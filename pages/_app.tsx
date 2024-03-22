import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { PageHead } from '../components/PageHead'
import { ReCaptchaProvider } from 'next-recaptcha-v3'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <PageHead />
      <Header />
      <main>
        <ReCaptchaProvider reCaptchaKey="6Lex9KApAAAAAIemmI4wqhmzeO0BOL-fDPjCwKp5">
          <Component {...pageProps} />
        </ReCaptchaProvider>
      </main>
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
