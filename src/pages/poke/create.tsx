import { useState, FormEvent } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Axios from 'axios'

import BaseContainer from '../../components/container/base'

const Create: React.FC = () => {
  const [url, setUrl] = useState('')
  const [errors, setErrors] = useState<any>({})
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const submitForm = async (e: FormEvent) => {
    e.preventDefault()

    if (url.length < 3) return null

    setLoading(true)
    
    try {
      await Axios.post('/link', {
        url
      })
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
          className="w-full mx-3 md:mx-auto md:w-8/12"
          onSubmit={submitForm}
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
                type="text"
                placeholder="http://localhost"
                value={url}
                onChange={e => setUrl(e.target.value)}
              />
              <small className="mt-1 mb-3 text-sm text-gray-500 font-extralight">
                Enter URL
              </small>
              <button type="submit" className="w-24 py-2 text-xs font-semibold text-white uppercase bg-green-500 border border-green-500 rounded">
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
