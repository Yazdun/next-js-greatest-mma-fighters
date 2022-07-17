import { Card, Layout, SEO } from '@components/index'
import { data } from '@data/index'

export default function Fighter(props) {
  const { fighter } = props
  return (
    <>
      <SEO title={fighter.name} desc={fighter.bio} />
      <Layout>
        <Card fighter={fighter} />
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
