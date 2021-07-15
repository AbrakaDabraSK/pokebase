import Head from 'next/head'

// @components
import BaseContainer from '../components/container/base'

const Register: React.FC = () => {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="pokebase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseContainer>
        <h1>Register</h1>
      </BaseContainer>
    </>
  )
}

export default Register
