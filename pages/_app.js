import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} canonical={router.route} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default MyApp
