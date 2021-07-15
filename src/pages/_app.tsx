import { AppProps } from 'next/app'
// import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'
import Axios from 'axios'

// @context
import { ObserverProvider } from '../context/observer'

// @utils
import fetcher from '../utils/fetcher'

// @styles
import '../styles/tailwind.css'

// @Axios
Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT
Axios.defaults.withCredentials = false

function App({ Component, pageProps }: AppProps) {
  // const { pathname } = useRouter()
  // const authRoutes = ['/register', '/login']
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
