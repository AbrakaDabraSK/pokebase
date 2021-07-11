import { useState, useEffect } from 'react'
import Axios from 'axios'

import Meta from '../card/meta'

const Search: React.FC = () => {
  const [terms, setTerms] = useState('')
  const [hits, setHits] = useState([])
  const [timer, setTimer] = useState(null)

  useEffect(() => {
    if ('' === terms.trim()) {
      setHits([])
      return
    }
    search()
  }, [terms])

  const search = async () => {
    if (terms.length < 3) { return null }
    clearTimeout(timer)
    setTimer(
      setTimeout(async () => {
        try {
          const { data } = await Axios.post(`/link/search`, {
            terms
          })
          setHits(data)
          console.log(data)
        } catch (error) {
          console.error(error)
        }
      }, 250)
    )
  }

  const newClick = async (id: string) => {
    if (id.length < 3) return null

    try {
      await Axios.get('/link/'+id+'/clicked')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="w-64 max-w-full px-1 md:px-4 md:w-160">
      <div className="relative flex items-center bg-gray-100 border-b shadow-md hover:border-green-500 hover:bg-white">
        <i className='pl-4 pr-3 text-gray-500 bx bx-search-alt'></i>
        <input 
          className="w-full py-1 pr-3 bg-transparent rounded focus:outline-none"
          type="text"
          value={terms}
          onChange={e => setTerms(e.target.value)}
        />
        <div 
          className="absolute left-0 right-0 bg-white shadow-sm"
          style={{ top: '105%' }}
        >
          {hits?.map((hit) => (
            <a
              className="flex items-center px-4 py-3 border-b border-green-100 cursor-pointer hover:bg-green-100 last:border-none"
              key={hit.id}
              href={hit.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => newClick(hit.id)}
            >
              {/* Image */}
              {hit.image && (
                <div 
                  className="hidden w-12 h-12 mr-2 bg-center bg-no-repeat bg-cover rounded-full md:inline"
                  style={{
                    backgroundImage: `url('${hit.image}')`,
                  }}
                ></div>
              )}

              {/* Info */}
              <div className="flex flex-col">

                {/* Title */}
                <span className="text-xs text-gray-500 font-ligth md:text-sm font-extralight">
                  { hit.title }
                </span>
              
                {/* Meta */}
                <Meta 
                  createdAt={hit.createdAt}
                  updatedAt={hit.updatedAt}
                  totalClicks={hit.totalClicks}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search
