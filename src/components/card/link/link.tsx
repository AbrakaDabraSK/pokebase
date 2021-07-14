import Axios from 'axios'

import Image from './block/image'
import Body from './block/body'
import Domain from './block/domain'
import Title from './block/title'
import Meta from './block/meta/meta'
import Desc from './block/desc'
import Keywords from './block/keywords'

import {
  LinkCardProps
} from '../../../types'

const LinkCard: React.FC<LinkCardProps> = ({ poke, revalidate }) => {
  const newClick = async (id: string) => {
    try {
      await Axios.get('/link/'+id+'/clicked')
      if (revalidate) revalidate()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <a 
      className="relative block m-4 overflow-hidden break-words bg-white rounded-lg shadow-lg cursor-pointer md:mb-4 min-w-340"
      href={poke.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => newClick(poke.id)}
    >
      <Image src={poke.image} />
      <Body>
        <Domain name={poke.domain} />
        <Title value={poke.title} />
        <Meta 
          createdAt={poke.createdAt}
          updatedAt={poke.updatedAt}
          totalClicks={poke.totalClicks}
        />
        <Desc value={poke.desc} />
        <Keywords value={poke.keywords} />
      </Body>
    </a>
  )
}

export default LinkCard
