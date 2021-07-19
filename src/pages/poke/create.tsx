import { useState, FormEvent } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import CryptoJS  from 'crypto-js'
import Axios from 'axios'

// @components
import BaseContainer from '../../components/container/base'

// @helpers
import {
  parsedURL
} from '../../utils/helpers'

const Create: React.FC = () => {
  const [url, setUrl] = useState('')
  const [pin, setPIN] = useState('')
  const [errors, setErrors] = useState<any>({})
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const submitForm = async (e: FormEvent) => {
    e.preventDefault()

    if (url.length < 3) return null

    setLoading(true)
    
    try {
      const data = { url: parsedURL(url), pin }
      const message = CryptoJS.AES.encrypt(JSON.stringify(data), process.env.NEXT_PUBLIC_CRYPTO_KEY).toString()
      
      await Axios.post('/link', {message})

      router.push('/')
    } catch (err) {
      setErrors(err.response.data)
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Create a poke</title>
        <meta name="description" content="Create a poke" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseContainer>
        <form 
          className="relative w-full mx-3 overflow-hidden shadow-md md:mx-auto md:w-8/12 rounded-2xl"
          onSubmit={submitForm}
        >
          <fieldset className="flex flex-col items-baseline justify-center bg-white">
            <legend className="relative w-full px-4 py-6 bg-gradient-to-br from-green-500 to-green-300">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('/img/shapes/shape_7.png`,
                }}
              ></div>
              <h6 className="text-lg font-semibold text-white">
                Create a poke
              </h6>
            </legend>
            <div className="flex flex-col items-start justify-center w-full p-5 shadow-inner">
              {/** URL **/}
              <input
                className="w-full mb-1 border-b border-gray-200 outline-none"
                type="text"
                placeholder="https://pokebase.vercel.app"
                value={url}
                required={true}
                onChange={e => setUrl(e.target.value)}
              />
              <small className="mt-1 mb-3 text-sm text-gray-500 font-extralight">
                Enter URL
              </small>
              
              {/** PIN**/}
              <input
                className="w-full mb-1 border-b border-gray-200 outline-none"
                type="text"
                placeholder="PIN code"
                value={pin}
                required={true}
                onChange={e => setPIN(e.target.value)}
              />
              <small className="mt-1 mb-3 text-sm text-gray-500 font-extralight">
                Enter your personal PIN code
              </small>

              {/** Button **/}
              <button type="submit" className="w-24 px-3 py-2 text-xs font-semibold text-white uppercase border-green-500 rounded bg-gradient-to-br from-green-500 to-green-300">
                {(loading ? (
                  <i className='bx bx-loader-alt'></i>
                ) : (
                  <span>Continue</span>
                ))}
              </button>
            </div>
            {errors.message && (
              <div className="w-full p-5 bg-red-500 rounded shadow-sm">
                <p className="text-sm font-semibold text-white">
                  { errors.message }
                </p>
              </div>
            )}
          </fieldset>
        </form>
      </BaseContainer>
    </>
  )
}

export default Create
