import { Layout, SEO, Showcase } from '@components/index'
import { data } from '@data/index'
import { useState } from 'react'

export default function Home() {
  const [fighers, setFighters] = useState(data)
  return (
    <>
      <SEO />
      <Layout>
        <Showcase fighters={data} />
      </Layout>
    </>
  )
}
