import Head from 'next/head'

const Favicon = () => {
  return (
    <Head>
      {/* Primary favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      
      {/* Fallback favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      
      {/* Apple touch icon */}
      <link rel="apple-touch-icon" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE4MCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iMTgwIiByeD0iMjAiIGZpbGw9IndoaXRlIi8+CjxpbWFnZSBocmVmPSJodHRwczovL2lrLmltYWdla2l0LmlvL2ZvbGljZWFzdW1taXQvRk9MSUNFQSUyMFNVTU1JVC9Mb2dvLnBuZy5qcGc/dXBkYXRlZEF0PTE3NTYyMjcxNjI0MDMiIAp4PSIxMCIgeT0iMTAiIHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIiAKcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIvPgo8L3N2Zz4=" />
      
      {/* Theme color */}
      <meta name="theme-color" content="#BF0A30" />
    </Head>
  )
}

export default Favicon
