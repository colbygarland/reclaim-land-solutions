import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { PageHead } from '../components/PageHead'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageHead />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
