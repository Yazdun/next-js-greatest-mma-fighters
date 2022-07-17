import Image from 'next/image'
import css from './styles.module.css'

export const Hero = ({ fighter }) => {
  const { thumbnail, name, nickname } = fighter
  return (
    <div className={css.hero}>
      <div className={css.info}>
        <h1>{name}</h1>
      </div>
      {/* <div className={css.image}>
        <Image
          src={thumbnail}
          alt={name}
          placeholder="blur"
          objectFit="cover"
        />
      </div> */}
    </div>
  )
}
