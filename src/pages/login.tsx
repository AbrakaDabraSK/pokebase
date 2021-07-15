import { useState, FormEvent } from 'react'
import Head from 'next/head'

// @components
import BaseContainer from '../components/container/base'

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const submitForm = async (e: FormEvent) => {
    e.preventDefault()

    if (email.length < 11) return null
  }
  
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="pokebase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseContainer>
        <form 
          onSubmit={submitForm}
          className="w-full mx-3 md:mx-auto md:w-8/12"
        >
          <fieldset className="flex flex-col items-baseline justify-center bg-white rounded shadow-sm">
            <legend className="w-full p-6 bg-gradient-to-br from-green-700 to-green-400">
              <h6 className="text-lg font-semibold text-white">
                Login
              </h6>
            </legend>
            <div className="flex flex-col items-start justify-center w-full p-5">
              <input
                className="w-full mb-1 border-b border-gray-200 outline-none"
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <small className="mt-1 mb-3 text-sm text-gray-500 font-extralight">
                Enter your email
              </small>
              <button type="submit" className="w-24 py-2 text-xs font-semibold text-white uppercase bg-green-500 border border-green-500 rounded">
                {(loading ? (
                  <i className='bx bx-loader-alt'></i>
                ) : (
                  <span>Continue</span>
                ))}
              </button>
            </div>
          </fieldset>
        </form>
      </BaseContainer>
    </>
  )
}

export default Login
