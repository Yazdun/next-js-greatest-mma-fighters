import { Filter, Layout, SEO, Showcase } from '@components/index'
import { data } from '@data/index'
import { useState } from 'react'

export default function Home() {
  const [fighters, setFighters] = useState(data)

  return (
    <>
      <SEO />
      <Layout>
        <Filter setFighters={setFighters} />
        <Showcase fighters={fighters} />
      </Layout>
    </>
  )
}
