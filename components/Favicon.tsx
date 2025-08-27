import Head from 'next/head'

const Favicon = () => {
  return (
    <Head>
      {/* Primary favicon */}
      <link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMwMDI4NjgiLz4KPGltYWdlIGhyZWY9Imh0dHBzOi8vaWsuaW1hZ2VraXQuaW8vZm9saWNlYXN1bW1pdC9GT0xJQ0VBJTIwU1VNTUlUL0xvZ28ucG5nLmpwZz91cGRhdGVkQXQ9MTc1NjIyNzE2MjQwMyIgCng9IjQiIHk9IjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgCnByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIHNsaWNlIi8+Cjx0ZXh0IHg9IjE2IiB5PSIyMiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIG9wYWNpdHk9IjAuOCI+RjwvdGV4dD4KPC9zdmc+" />
      
      {/* Fallback favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      
      {/* Apple touch icon */}
      <link rel="apple-touch-icon" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE4MCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iMTgwIiByeD0iMjAiIGZpbGw9IiMwMDI4NjgiLz4KPGltYWdlIGhyZWY9Imh0dHBzOi8vaWsuaW1hZ2VraXQuaW8vZm9saWNlYXN1bW1pdC9GT0xJQ0VBJTIwU1VNTUlUL0xvZ28ucG5nLmpwZz91cGRhdGVkQXQ9MTc1NjIyNzE2MjQwMyIgCng9IjMwIiB5PSIzMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIApwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBzbGljZSIvPgo8dGV4dCB4PSI5MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgb3BhY2l0eT0iMC44Ij5GT0xJQ0VBPC90ZXh0Pgo8L3N2Zz4=" />
      
      {/* Theme color */}
      <meta name="theme-color" content="#BF0A30" />
    </Head>
  )
}

export default Favicon
