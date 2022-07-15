import React from 'react'
import css from './styles.module.css'

export const Search = () => {
  return (
    <input
      type="text"
      className={css.input}
      placeholder="search for a fighter ..."
    />
  )
}
