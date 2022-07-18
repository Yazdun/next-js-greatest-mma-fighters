import {
  Card,
  Flag,
  Layout,
  MartialArts,
  Records,
  SEO,
  Slider,
} from '@components/index'
import { GiWeight, GiBodyHeight, GiNinjaHeroicStance } from 'react-icons/gi'
import { FaBirthdayCake } from 'react-icons/fa'
import { data } from '@data/index'
import css from './styles.module.css'
import cn from 'classnames'

export default function Fighter(props) {
  const {
    name,
    country,
    bio,
    martial_arts,
    gallery,
    style,
    DOB,
    height,
    weight,
    stance,
    records,
  } = props.fighter

  return (
    <>
      <SEO title={name} desc={bio} />
      <Layout>
        <div className={css.container}>
          <h1 className={css.title}>
            <Flag country={country} />
            {name}
          </h1>
          <MartialArts collection={martial_arts} />
        </div>
        <p className={css.container}>{bio}</p>
        <Slider slides={gallery} />
        <p className={cn(css.container, css.paragraph)}>{style}</p>
        <div className={cn(css.container, css.info)}>
          <Records {...records} />
          <div className={css.cards}>
            <Card text={DOB} Icon={FaBirthdayCake} />
            <Card text={height} Icon={GiBodyHeight} />
            <Card text={weight} Icon={GiWeight} />
            <Card text={stance} Icon={GiNinjaHeroicStance} />
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = data.map(fighter => {
    return {
      params: { slug: fighter.slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async context => {
  const { slug } = context.params
  const fighter = data.find(fighter => fighter.slug === slug)
  return {
    props: { fighter: fighter },
  }
}
