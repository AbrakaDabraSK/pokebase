import useSWR from 'swr'

import NewsFeedCard from './card/newsFeedCard'

import {
  Poke
} from '../types'

export default function NewsFeed() {
  const { data: pokes } = useSWR<Poke[]>('/newsfeed')

  return (
    <div>
      {pokes?.map(poke => (
        <NewsFeedCard poke={poke} key={poke.id} />
      ))}
    </div>
  )
}
