import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { SessionProvider } from 'next-auth/react'
import AuthWrapper from '../components/AuthWrapper'
import { Provider } from "react-redux"
import {store} from "../components/DashboradComponent/store"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/sidebar.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <AuthWrapper>
          <Header />
          <Component {...pageProps} />
        </AuthWrapper>
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
