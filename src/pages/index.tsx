import Head from 'next/head'

import BaseContainer from '../components/container/base'
import Row from '../components/row'
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
      <BaseContainer>
        <Row>
          <NewsFeed />
          <Sidebar />
        </Row>
      </BaseContainer>
    </>
  )
}
