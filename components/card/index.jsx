import Image from 'next/image'
import css from './styles.module.css'
import { GiBurningSkull } from 'react-icons/gi'
import ReactCountryFlag from 'react-country-flag'

export const Card = ({ fighter }) => {
  const { thumbnail, name, nickname, country } = fighter
  return (
    <div className={css.hero}>
      <div className={css.image}>
        <Image
          src={thumbnail}
          alt={name}
          placeholder="blur"
          objectFit="cover"
        />
      </div>
      <div className={css.info}>
        <h1 className={css.title}>{name}</h1>
      </div>
    </div>
  )
}

{
  /* <span className={css.nickname}>
<GiBurningSkull />
{nickname}
</span> */
}
