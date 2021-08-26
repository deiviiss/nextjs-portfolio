import 'bootswatch/dist/cosmo/bootstrap.min.css'
import 'animate.css/animate.min.css'
import '../styles/global.css'
// import { Head } from 'next/document'

function MyApp({ Component, pageProps }) {

  // <Head>
  //   <title>My Portfolio</title>
  // </Head>
  return <Component {...pageProps} />
}

export default MyApp;