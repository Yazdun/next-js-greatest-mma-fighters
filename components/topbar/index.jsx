import React from 'react'
import { Search, Theme } from '@components/index'
import css from './styles.module.css'

export const Topbar = () => {
  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <Theme />
        <Search />
      </nav>
    </div>
  )
}
