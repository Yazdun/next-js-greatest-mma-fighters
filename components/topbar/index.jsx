import React from 'react'
import { Search, Theme } from '@components/index'
import css from './styles.module.css'
import Link from 'next/link'

export const Topbar = () => {
  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <Theme />
      </nav>
    </div>
  )
}
