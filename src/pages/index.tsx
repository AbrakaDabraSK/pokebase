import Head from 'next/head'

import Main from '../components/main'
import Row from '../components/row'
import NavBar from '../components/navbar/navbar'
import NewsFeed from '../components/newsfeed'
import Sidebar from '../components/sidebar'

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
        <Row>
          <NewsFeed />
          <Sidebar />
        </Row>
      </Main>
    </>
  )
}
