import React from 'react'
import { fighters } from '@data/index'
import { Fighter, Layout, SEO } from '@components/index'
import css from './styles.module.css'

export const Showcase = () => {
  return (
    <div className={css.grid}>
      {fighters.map(fighter => {
        return <Fighter fighter={fighter} key={fighter.name} />
      })}
    </div>
  )
}
