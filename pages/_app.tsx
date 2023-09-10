import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <meta name="viewport" content="viewport-fit=cover, initial-scale=1.0"/>
        </Head>
        <Component {...pageProps} />
      </>
  )
}
