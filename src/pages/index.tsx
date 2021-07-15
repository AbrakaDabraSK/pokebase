import Head from 'next/head'

// @components
import BaseContainer from '../components/container/base'
import Explore from '../components/explore'
import NewsFeed from '../components/newsfeed'
import Sidebar from '../components/sidebar'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>pokebase</title>
        <meta name="description" content="pokebase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseContainer>
        <Explore />
        <NewsFeed />
        <Sidebar />
      </BaseContainer>
    </>
  )
}

export default Home
