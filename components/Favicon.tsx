import Head from 'next/head'

const Favicon = () => {
  return (
    <Head>
      {/* Primary SVG favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      
      {/* Fallback ICO favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      
      {/* Explicit sizes for broader compatibility (using ICO until specific PNGs are added) */}
      <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon.ico" />
      <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon.ico" />
      
      {/* Apple touch icon (consider adding /apple-touch-icon.png later) */}
      <link rel="apple-touch-icon" href="/favicon.ico" />
    </Head>
  )
}

export default Favicon
