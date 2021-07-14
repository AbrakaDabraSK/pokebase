import { useState, useEffect } from 'react'
import { useSWRInfinite } from 'swr'

import LinkCard from './card/link/link'

import {
  Poke
} from '../types'

const NewsFeed: React.FC = () => {
  const [ observedPoke, setObservedPoke] = useState('')
  const {
    data,
    error,
    size,
    setSize,
    isValidating,
    revalidate,
  } = useSWRInfinite<Poke[]>((index) => `/newsfeed?currentPage=${index + 1}`, {
    revalidateAll: true,
  })

  const isInitialLoading = !data && !error
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const pokes: Poke[] = data ? [].concat(...data) : []

  useEffect(() => {
    if (!pokes || pokes.length === 0) return

    const id = pokes[pokes.length - 1].id

    const observeElement = (element: HTMLElement) => {
      if (!element) return
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting === true) {
            setSize(size + 1)
            observer.unobserve(element)
          }
        },
        { threshold: 1 }
      )
      observer.observe(element)
    }
    if (id !== observedPoke) {
      setObservedPoke(id)
      observeElement(document.getElementById(id))
    }
  }, [pokes, observedPoke, size, setSize])

  return (
    <section className="flex-grow w-full p-3 sm:max-w-5xl">
      <header>
        <h3 className="pl-1.5 md:pl-0 mt-1 mb-2 text-2xl font-bold text-black">
          Today
        </h3>
      </header>
      {isInitialLoading && <p className="text-lg text-center">Loading...</p>}
      {pokes?.map((poke, index) => (
        <div key={index} id={poke.id}>
          <LinkCard poke={poke} revalidate={revalidate} />
        </div>
      ))}
      {isValidating && pokes.length > 0 && (
        <p className="text-center text-ms">Loading more...</p>
      )}
    </section>
  )
}

export default NewsFeed
