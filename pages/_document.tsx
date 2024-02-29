import { Html, Head, Main, NextScript } from 'next/document'

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
        {/* @ts-ignore */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7E8B8XXYBR"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments)} gtag('js', new Date()); gtag('config', 'G-7E8B8XXYBR'); </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
