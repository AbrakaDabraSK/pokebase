import { useState } from 'react'
import Head from 'next/head'

// @components
import BaseContainer from '../components/container/base'

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="pokebase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseContainer>
        <h1>Login</h1>
      </BaseContainer>
    </>
  )
}

export default Login
