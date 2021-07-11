import Axios from 'axios'

import Image from './block/image'
import Domain from './block/domain'
import Title from './block/title'
import Meta from '../meta'
import Desc from './block/desc'
import Keywords from './block/keywords'

import {
  NewsFeedCardProps
} from '../../../types'

const NewsFeedCard: React.FC<NewsFeedCardProps> = ({ poke, revalidate }) => {
  const newClick = async (id: string) => {
    if (id.length < 3) return null

    try {
      await Axios.get('/link/'+id+'/clicked')
      if (revalidate) revalidate()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <a 
      className="relative block m-4 overflow-hidden break-words bg-white rounded-lg shadow-lg cursor-pointer md:mb-4"
      id={poke.id}
      href={poke.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => newClick(poke.id)}
    >
      {/* Image */}
      <Image src={poke.image} />

      {/* Body */}
      <div className="w-full h-auto px-3 pb-4 mt-2">
        {/* Domain */}
        <Domain name={poke.domain} />

        {/* Title */}
        <Title value={poke.title} />

        {/* Meta */}
        <Meta 
          createdAt={poke.createdAt}
          updatedAt={poke.updatedAt}
          totalClicks={poke.totalClicks}
        />
        
        {/* Desc */}
        <Desc value={poke.desc} />

        {/* Keywords */}
        <Keywords value={poke.keywords} />
        
      </div>
    </a>
  )
}

export default NewsFeedCard
