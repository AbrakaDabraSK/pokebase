import Head from 'next/head'

import Main from '../../components/main'
import NavBar from '../../components/navbar/navbar'

export default function Create() {
  return (
    <>
      <Head>
        <title>Create a poke</title>
        <meta name="description" content="Create a poke" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Main>
        <div>
          <h1>
            Create a poke
          </h1>
        </div>
      </Main>
    </>
  )
}
