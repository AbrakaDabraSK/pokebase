import Head from 'next/head'

// @components
import BaseContainer from '../components/container/base'
import Explore from '../components/explore'
import NewsFeed from '../components/newsfeed'
import Sidebar from '../components/sidebar'
import YoutubeModal from '../components/modal/youtube'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        {/**  default **/}
        <meta name="keywords" content="open source,pokebase,facebook alternative" />
        <meta name="description" content="The Open Source Facebook Alternative" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
        <meta name="generator" content="pokebase" />
        {/** schema.org **/}
        <meta itemProp="name" content="pokebase" />
        <meta itemProp="title" content="pokebase" />
        <meta itemProp="keywords" content="open source,pokebase,facebook alternative" />
        <meta itemProp="description" content="The Open Source Facebook Alternative" />
        <meta itemProp="image" content="https://pokebase.vercel.app/img/fb-poster-pokebase.png" />
        {/** Facebook Open Graph data **/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pokebase.vercel.app" />
        <meta property="og:locale" content="sk" />
        <meta property="og:site_name" content="pokebase" />
        <meta property="og:title" content="pokebase" />
        <meta property="og:description" content="The Open Source Facebook Alternative" />
        <meta property="og:image" content="https://pokebase.vercel.app/img/fb-poster-pokebase.png" />
        {/** Twitter Card data **/}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@publisher_handle" />
        <meta name="twitter:title" content="pokebase" />
        <meta name="twitter:description" content="The Open Source Facebook Alternative" />
        <meta name="twitter:creator" content="@author_handle" />
        <meta name="twitter:image" content="https://pokebase.vercel.app/img/fb-poster-pokebase.png" />
        {/** Title **/}
        <title>pokebase</title>
      </Head>
      <BaseContainer>
        <Explore />
        <NewsFeed />
        <Sidebar />
      </BaseContainer>
      <YoutubeModal />
    </>
  )
}

export default Home
