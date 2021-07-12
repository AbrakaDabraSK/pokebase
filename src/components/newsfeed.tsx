import { useState, useEffect } from 'react'
import { useSWRInfinite } from 'swr'

import LinkCard from './card/link/link'

import {
  Poke
} from '../types'

export default function NewsFeed() {
  const [ observedPoke, setObservedPoke] = useState('')
  const {
    data,
    error,
    size: page,
    setSize: setPage,
    isValidating,
    revalidate,
  } = useSWRInfinite<Poke[]>((index) => `/newsfeed?page=${index}`)

  const isInitialLoading = !data && !error
  const pokes: Poke[] = data ? [].concat(...data) : []

  useEffect(() => {
    if (!pokes || pokes.length === 0) return

    const id = pokes[pokes.length - 1].id

    if (id !== observedPoke) {
      setObservedPoke(id)
      observeElement(document.getElementById(id))
    }
  }, [pokes])

  const observeElement = (element: HTMLElement) => {
    if (!element) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting === true) {
          setPage(page + 1)
          observer.unobserve(element)
        }
      },
      { threshold: 1 }
    )
    observer.observe(element)
  }
  
  return (
    <div className="flex-auto w-full">
      {isInitialLoading && <p className="text-lg text-center">Loading...</p>}
      {pokes?.map(poke => (
        <LinkCard
          key={poke.id}
          poke={poke} 
          revalidate={revalidate}
        />
      ))}
      {isValidating && pokes.length > 0 && (
        <p className="text-center text-ms">Loading More...</p>
      )}
    </div>
  )
}
