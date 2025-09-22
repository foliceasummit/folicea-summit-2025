import Head from 'next/head'

const Favicon = () => {
  return (
    <Head>
      {/* Favicons centralized; using local assets */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    </Head>
  )
}

export default Favicon
