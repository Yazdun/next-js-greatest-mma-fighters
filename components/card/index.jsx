import css from './styles.module.css'

export const Card = ({ text, Icon }) => {
  return (
    <div className={css.card}>
      <Icon />
      {text}
    </div>
  )
}
