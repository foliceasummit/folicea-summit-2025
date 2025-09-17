import Head from 'next/head'

const Favicon = () => {
  return (
    <Head>
      {/* Primary favicon - use provided logo */}
      <link rel="icon" type="image/jpeg" href="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403" />
      
      {/* Fallback favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      
      {/* Apple touch icon */}
      <link rel="apple-touch-icon" href="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403" />
      
      {/* Theme color */}
      <meta name="theme-color" content="#BF0A30" />
    </Head>
  )
}

export default Favicon
