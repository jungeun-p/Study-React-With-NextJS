import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import homeStyles from '@/styles/Home.module.css'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from '@/lib/post'
import Link from 'next/link'

interface allPostsDataType {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}

const Home = ({ allPostsData }: allPostsDataType) => {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Peter lim</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Peter Lim Introduction]</p>
        <p>
          (This is a website)
        </p>
      </section>
      <section className={`${homeStyles.headingMD} ${homeStyles.padding1px}` }>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({id, title, date}) => 
            <li className={homeStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                title: {title}
              </Link>
              <br />
              <small className={homeStyles.lightText}>
                date: {date}
              </small>
            </li>
          )}
        </ul>
      </section>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async() => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}