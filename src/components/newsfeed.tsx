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
  } = useSWRInfinite<Poke[]>((index) => `/newsfeed?currentPage=${index + 1}`, {
    revalidateAll: true,
  })

  const isInitialLoading = !data && !error
  const pokes: Poke[] = data ? [].concat(...data) : []

  useEffect(() => {
    if (!pokes || pokes.length === 0) return

    const id = pokes[pokes.length - 1].id

    console.log('id '+id)
    console.log('observedPoke '+observedPoke)
    
    if (id !== observedPoke) {
      setObservedPoke(id)
      observeElement(document.getElementById(id))
    }
  }, [pokes])

  const observeElement = (element: HTMLElement) => {
    console.log('element '+element)
    if (!element) return
    const observer = new IntersectionObserver(
      (entries) => {
        console.log('isIntersecting '+entries[0].isIntersecting)
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
    <section className="sm:px-24 lg:px-80 2xl:px-0">
      <header>
        <h3 className="pl-1.5 md:pl-0 mt-1 mb-2 text-2xl font-bold text-black">
          Today
        </h3>
      </header>
      {isInitialLoading && <p className="text-lg text-center">Loading...</p>}
      {pokes?.map(poke => (
        <LinkCard
          key={poke.id}
          poke={poke} 
          revalidate={revalidate}
        />
      ))}
      {isValidating && pokes.length > 0 && (
        <p className="text-center text-ms">Loading more...</p>
      )}
    </section>
  )
}
