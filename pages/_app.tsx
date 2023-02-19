import Navigation from '@/components/core/Header/Navigation'
import Footer from '@/components/core/Footer/Footer'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/AuthContext'
import '../styles/globals.css'
import Container from '@/components/core/Layouts/Container'
import { ToastProvider } from 'context/toastContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          {/* <ToastProvider> */}
            <Container>
              <Navigation />
              <Component {...pageProps} />
              <Footer />
            </Container>
          {/* </ToastProvider> */}
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}

export default MyApp
