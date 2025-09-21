import Head from 'next/head'

const Favicon = () => {
  return (
    <Head>
      {/* Prefer PNG logo explicitly to override cached or default favicons */}
      <link rel="icon" href="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403" />
      <link rel="icon" type="image/png" sizes="32x32" href="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403" />
      <link rel="icon" type="image/png" sizes="16x16" href="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403" />

      {/* Keep SVG/ICO as fallbacks */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      {/* Apple touch icon */}
      <link rel="apple-touch-icon" href="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403" />
    </Head>
  )
}

export default Favicon
