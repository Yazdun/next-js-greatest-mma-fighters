import React from 'react'
import { Fighter } from '@components/index'
import css from './styles.module.css'

export const Showcase = ({ fighters }) => {
  return (
    <div className={css.grid}>
      {fighters.map(fighter => {
        return <Fighter fighter={fighter} key={fighter.name} />
      })}
    </div>
  )
}
