import '../styles/globals.css'
import  Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>

  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Noto+Sans:ital@0;1&display=swap" rel="stylesheet"/>
  </Head>
<Component {...pageProps} />
  </>
  )
}

export default MyApp
