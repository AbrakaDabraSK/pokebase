import { useRef, useContext, useState, useEffect } from 'react'
import ObserverContext from '../../../context/observer'
import LinkCard from '../../card/link'

const List: React.FC = () => {
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
    <ul>
      {/** Items */}
      {data.map((item, index) => (
        <li key={index}>
          <LinkCard link={item} />
        </li>
      ))}

      {/** Loading */}
      {loading && <li className="p-3 text-lg text-center">Loading...</li>}

      {/** Loading more */}
      {!loading && more && ( <li ref={setElement}></li> )}
    </ul>
  )
} 

export default List
