import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {/* @ts-ignore */}
        <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-7E8B8XXYBR"></Script> <Script strategy='afterInteractive'>{`window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments)} gtag('js', new Date()); gtag('config', 'G-7E8B8XXYBR');`}</Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
