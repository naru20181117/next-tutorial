import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>ぼくのなまえはなる</p>
        <p>
          This is my next.js portfolio site - you can build on {' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>
      <Link href='/posts/first-post'>
        <a>
          ポストを見る
        </a>
      </Link>
    </Layout>
  )
}
