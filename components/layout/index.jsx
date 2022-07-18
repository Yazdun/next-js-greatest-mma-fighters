import { Footer, Topbar } from '@components/index'
import { motion } from 'framer-motion'
import { framer_variants } from './framer'

export const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <motion.main layout {...framer_variants}>
        {children}
      </motion.main>
      <Footer />
    </>
  )
}
