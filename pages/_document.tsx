import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Meta tags */}
        <meta name="theme-color" content="#BF0A30" />
        <meta name="description" content="FOLICEA Summit 2025 - Federation of Liberian Communities in East Africa" />
        <meta name="keywords" content="FOLICEA, Liberian, Summit, East Africa, Uganda, Kampala" />
        <meta name="author" content="FOLICEA Summit 2025" />
        
        {/* Open Graph */}
        <meta property="og:title" content="FOLICEA Summit 2025" />
        <meta property="og:description" content="Federation of Liberian Communities in East Africa Summit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://folicea.vercel.app" />
        <meta property="og:image" content="https://ik.imagekit.io/folicea/Logo.png.jpg?updatedAt=1755871491816" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FOLICEA Summit 2025" />
        <meta name="twitter:description" content="Federation of Liberian Communities in East Africa Summit" />
        <meta name="twitter:image" content="https://ik.imagekit.io/folicea/Logo.png.jpg?updatedAt=1755871491816" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
