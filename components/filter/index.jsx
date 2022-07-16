import React from 'react'
import css from './styles.module.css'
import { divisions } from '@data/index'

export const Filter = ({ filter }) => {
  return (
    <ul className={css.container}>
      {divisions.map(division => {
        return (
          <li key={division}>
            <button onClick={() => filter(division)} className={css.btn}>
              {division}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
