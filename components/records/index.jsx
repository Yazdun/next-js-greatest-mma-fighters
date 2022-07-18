import css from './styles.module.css'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'
import { TiEquals } from 'react-icons/ti'
import cn from 'classnames'

export const Records = ({ wins, loses, draws }) => {
  return (
    <ul className={css.records}>
      <li className={cn(css.item, css.danger)}>
        <AiFillCaretDown />
        {loses}
      </li>
      <li className={cn(css.item, css.success)}>
        <AiFillCaretUp />
        {wins}
      </li>

      <li className={cn(css.item, css.draw)}>
        <TiEquals />
        {draws}
      </li>
    </ul>
  )
}
