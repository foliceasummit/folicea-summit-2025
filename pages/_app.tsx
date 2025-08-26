import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>FOLICEA Summit 2025 - Federation of Liberian Communities in East Africa</title>
        <meta name="description" content="Join us for the historic FOLICEA Summit 2025 in Kampala, Uganda. Strengthen diaspora bonds, network with professionals, and create lasting impact." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="FOLICEA Summit 2025" />
        <meta property="og:description" content="Federation of Liberian Communities in East Africa Summit 2025" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ik.imagekit.io/folicea/Logo.png.jpg?updatedAt=1755871491816" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FOLICEA Summit 2025" />
        <meta name="twitter:description" content="Federation of Liberian Communities in East Africa Summit 2025" />
        <meta name="twitter:image" content="https://ik.imagekit.io/folicea/Logo.png.jpg?updatedAt=1755871491816" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
