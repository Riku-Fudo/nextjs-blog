import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home( { allPostsData } ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <p>ここに自己紹介を記述</p>
        <p>
          (これは Next.js のサンプルページです - これから{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>{' '}
          のサイトにあるようなページを作っていきます。)
        </p>
      </section>
    </Layout>
  )
}
