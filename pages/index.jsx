import { Filter, Layout, SEO, Showcase } from '@components/index'
import { data } from '@data/index'
import { useState } from 'react'

export default function Home() {
  const [fighters, setFighters] = useState(data)

  const filter = division => {
    const filtered = data.filter(fighter => {
      return fighter.division.includes(division)
    })
    setFighters(filtered)
  }

  return (
    <>
      <SEO />
      <Layout>
        <Filter filter={filter} />
        <Showcase fighters={fighters} key={fighters} />
      </Layout>
    </>
  )
}
