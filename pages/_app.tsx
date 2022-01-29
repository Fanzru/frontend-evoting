import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/tailwind.css'
import NextNProgress from 'nextjs-progressbar'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-poppins">
      <Head>
        <title>Evoting App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress color="#7B7B7B"/>
      <Component {...pageProps} />
    </div>
  ) 
  
}

export default MyApp
