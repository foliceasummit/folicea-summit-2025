import Head from 'next/head'

const Favicon = () => {
  return (
    <Head>
      {/* Primary favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      
      {/* Fallback favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      
      {/* Apple touch icon */}
      <link rel="apple-touch-icon" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE4MCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iMTgwIiByeD0iMjAiIGZpbGw9IiMwMDI4NjgiLz4KPGNpcmNsZSBjeD0iOTAiIGN5PSI5MCIgcj0iNjAiIGZpbGw9IiNCRjBCMzAiLz4KPHRleHQgeD0iOTAiIHk9IjExMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkY8L3RleHQ+Cjwvc3ZnPgo=" />
      
      {/* Theme color */}
      <meta name="theme-color" content="#BF0A30" />
    </Head>
  )
}

export default Favicon
