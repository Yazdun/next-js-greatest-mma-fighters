import { Flag, Layout, MartialArts, SEO } from '@components/index'
import { data } from '@data/index'
import css from './styles.module.css'

export default function Fighter(props) {
  const { name, country, bio, martial_arts } = props.fighter

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
