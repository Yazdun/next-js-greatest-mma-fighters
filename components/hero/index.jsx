import Image from 'next/image'
import css from './styles.module.css'
import ReactCountryFlag from 'react-country-flag'

export const Hero = ({ fighter }) => {
  const { thumbnail, name, nickname, country } = fighter
  return (
    <div className={css.hero}>
      <div className={css.info}>
        <h1>{name}</h1>
        <ReactCountryFlag
          countryCode={country.countryCode}
          // countryCode={country.countryCode}
          svg
          style={{
            width: '3em',
            height: '3em',
          }}
          title={country.countryName}
        />
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
