import Navigation from '@/components/core/Header/Navigation'
import Footer from '@/components/core/Footer/Footer'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../state/auth/AuthContext'
import '../styles/globals.css'
import Container from '@/components/core/Layouts/Container'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <Container>
            <Navigation />
            <Component {...pageProps} />
            <Footer />
          </Container>
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}

export default MyApp
