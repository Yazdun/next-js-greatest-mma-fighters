import css from './styles.module.css'

export const MartialArts = ({ collection }) => {
  return (
    <ul className={css.list}>
      {collection.map(item => {
        return <li key={item}>● {item}</li>
      })}
    </ul>
  )
}
