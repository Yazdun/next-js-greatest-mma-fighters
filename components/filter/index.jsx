import React from 'react'
import css from './styles.module.css'
import { divisions } from '@data/index'

export const Filter = ({}) => {
  return (
    <ul className={css.container}>
      {divisions.map(division => {
        const { name } = division
        return (
          <li key={name}>
            <button className={css.btn}>{name}</button>
          </li>
        )
      })}
    </ul>
  )
}
