import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta tags */}
        {/* Browser UI colors with fallbacks */}
        {/* Base color for browsers that don't support media-based theme-color */}
        <meta name="theme-color" content="#BF0A30" />
        {/* Override for dark mode in supporting browsers (Chromium, Safari) */}
        <meta name="theme-color" content="#8A0722" media="(prefers-color-scheme: dark)" />
        {/* Page supports both color schemes (improves controls on Firefox/Safari) */}
        <meta name="color-scheme" content="light dark" />
        {/* iOS Safari */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Windows tiles (legacy but harmless) */}
        <meta name="msapplication-TileColor" content="#BF0A30" />
        <meta name="description" content="FOLICEA Summit 2025 - Federation of Liberian Communities in East Africa" />
        <meta name="keywords" content="FOLICEA, Liberian, Summit, East Africa, Uganda, Kampala" />
        <meta name="author" content="FOLICEA Summit 2025" />
        
        {/* Open Graph */}
        <meta property="og:title" content="FOLICEA Summit 2025" />
        <meta property="og:description" content="Federation of Liberian Communities in East Africa Summit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://folicea.vercel.app" />
        <meta property="og:image" content="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FOLICEA Summit 2025" />
        <meta name="twitter:description" content="Federation of Liberian Communities in East Africa Summit" />
        <meta name="twitter:image" content="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
