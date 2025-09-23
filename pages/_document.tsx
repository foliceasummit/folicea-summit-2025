import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Base theme color for supported browsers */}
        <meta name="theme-color" content="#BF0A30" />
        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        {/* Fallback favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}