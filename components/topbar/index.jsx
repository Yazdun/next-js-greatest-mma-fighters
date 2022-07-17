import React from 'react'
import { Theme } from '@components/index'
import css from './styles.module.css'
import Link from 'next/link'

export const Topbar = () => {
  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <Link href="/">
          <a className={css.link}>MMA</a>
        </Link>
        <Theme />
      </nav>
    </div>
  )
}
