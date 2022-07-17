import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { framer_fighter } from './framer'
import css from './styles.module.css'
import { motion } from 'framer-motion'

export const Fighter = ({ fighter }) => {
  const { thumbnail, name, slug } = fighter

  return (
    <Link href={slug}>
      <motion.a layout {...framer_fighter} className={css.fighter}>
        <div className={css.image}>
          <Image
            src={thumbnail}
            alt={name}
            placeholder="blur"
            objectFit="cover"
          />
        </div>
        <h2 className={css.title}>{name}</h2>
      </motion.a>
    </Link>
  )
}
