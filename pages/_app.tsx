import 'normalize.css'
import '../styles/globals.scss'
import '../styles/Button.scss'
import '../styles/ErrorMessage.scss'
import '../styles/Hamburger.scss'
import '../styles/Link.scss'
import '../styles/Logo.scss'
import '../styles/Sidenav.scss'
import '../styles/SuccessMessage.scss'
import '../styles/Toggle.scss'
import '../styles/Topnav.scss'

import type { AppProps } from 'next/app'
import { AppProvider } from '../context/AppContext'

import Layout from '../components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}
