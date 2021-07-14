import { useRef, useContext, useState, useEffect } from 'react'
import ObserverContext from '../context/observer'
import LinkCard from './card/link/link'

const NewsFeed: React.FC = () => {
  const threshold = 0
  const root = null
  const rootMargin = '0%'
  const freezeOnceVisible = false

  const [entry, setEntry] = useState<IntersectionObserverEntry>()

  const frozen = entry?.isIntersecting && freezeOnceVisible

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
    if (entry.isIntersecting) {
      loader.current()
    }
  }
  
  const { data, loading, more, load } = useContext(ObserverContext);
  const loader = useRef(load);

  const [element, setElement] = useState(null);

  useEffect(() => {
    loader.current = load;
  }, [load]);

  useEffect(() => {
    const currentElement = element;
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || frozen || !currentElement) return

    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, observerParams)

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element])
  
  return (
    <section className="flex-grow w-full p-3 sm:max-w-5xl">
      <header>
        <h3 className="pl-1.5 md:pl-0 mt-1 mb-2 text-2xl font-bold text-black">
          Today
        </h3>
      </header>
      <ul>
        {/** Pokes */}
        {data.map((poke, index) => (
          <li key={index}>
            <LinkCard poke={poke} />
          </li>
        ))}

        {/** Loading */}
        {loading && <li className="p-3 text-lg text-center">Loading...</li>}

        {/** Loading more */}
        {!loading && more && ( <li ref={setElement}></li> )}
      </ul>
    </section>
  )
}

export default NewsFeed
