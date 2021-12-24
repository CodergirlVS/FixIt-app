import '../styles/globals.css'
import Head from 'next/head'
import fire from '../config/fire-config';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <title>FixIt App </title>
      <meta name='description' content='This app helps to keep track of orders'/>
      <link rel="icon" href="/money_bag.png" />
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp;
