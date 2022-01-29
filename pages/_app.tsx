import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-poppins">
      <Head>
        <title>Evoting App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  ) 
  
}

export default MyApp
