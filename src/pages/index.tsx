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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div></div>
          <NewsFeed />
          <div></div>
        </div>
      </Main>
    </>
  )
}
