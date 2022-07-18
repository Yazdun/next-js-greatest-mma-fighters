import { Layout, SEO } from '@components/index'
import css from './styles.module.css'

export default function Page404() {
  return (
    <>
      <SEO title="404" desc="This page does not exist" />
      <Layout>
        <header className={css.wrapper}>
          <h1>oops ! not found</h1>
          <p>This page has been deleted or does not exist</p>
        </header>
      </Layout>
    </>
  )
}
