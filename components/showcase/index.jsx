import React from 'react'
import { Fighter } from '@components/index'
import css from './styles.module.css'
import { motion } from 'framer-motion'

export const Showcase = ({ fighters }) => {
  return (
    <motion.div layout className={css.grid}>
      {fighters.map(fighter => {
        return <Fighter fighter={fighter} key={fighter.name} />
      })}
    </motion.div>
  )
}
