import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'
import Axios from 'axios'

import { ObserverProvider } from '../context/observer'
import fetcher from '../utils/fetcher'

import '../styles/tailwind.css'

Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL
Axios.defaults.withCredentials = false

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const authRoutes = ['/register', '/login']
  // const authRoute = authRoutes.includes(pathname)

  return (
    <SWRConfig
      value={{
        fetcher,
        dedupingInterval: 10000,
      }}
    >
      <ObserverProvider>
        <Component {...pageProps} />
      </ObserverProvider>
    </SWRConfig>
  )
}

export default App
