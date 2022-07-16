import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import css from './styles.module.css'

export const Fighter = ({ fighter }) => {
  const { thumbnail, name, slug } = fighter

  return (
    <Link href={slug}>
      <a>
        <div className={css.image}>
          <Image
            src={thumbnail}
            alt={name}
            placeholder="blur"
            objectFit="cover"
          />
        </div>
        <h2 className={css.title}>{name}</h2>
      </a>
    </Link>
  )
}
