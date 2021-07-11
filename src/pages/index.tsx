import Head from 'next/head'

import Main from '../components/main'
import NavBar from '../components/navbar/navbar'
import NewsFeed from '../components/newsfeed'

export default function Home() {
  return (
    <>
      <Head>
        <title>pokebase</title>
        <meta name="description" content="pokebase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Main>
        <section></section>
        <NewsFeed />
        <section></section>
      </Main>
    </>
  )
}
