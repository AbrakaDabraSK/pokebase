import Axios from 'axios'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import {
  NewsFeedCardProps
} from '../../types'

dayjs.extend(relativeTime)

const NewsFeedCard: React.FC<NewsFeedCardProps> = ({ poke }) => {

  const newClick = async (id: string) => {
    if (id.length < 3) return null

    try {
      await Axios.get('/link/'+id+'/clicked')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <a 
      className="relative block m-4 overflow-hidden break-words bg-white rounded-lg shadow-lg cursor-pointer md:mb-4"
      href={poke.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => newClick(poke.id)}
    >
      <div 
        className="w-full h-64 bg-center bg-no-repeat bg-cover md:h-96"
        style={{
          backgroundImage: `url('${poke.image}')`,
        }}
      ></div>
      <div className="w-full h-auto px-3 pb-4 mt-2">
        <span className="items-center px-2 py-1 mb-1 text-sm font-bold text-white bg-green-400 rounded-lg">
          {(poke.domain === 'youtube.com' ? (
            <i className="relative mr-1 inset-0.5 text-md bx bxl-youtube"></i>
          ) : (
            <i className="relative mr-1 inset-0.5 text-md bx bxs-bone"></i>
          ))}
          { poke.domain }
        </span>
        <h4 className="mt-2 text-lg font-extrabold text-black-900">
          { poke.title }
        </h4>
        <small className="text-gray-500">
          <i className="mr-1 text-green-400 bx bxs-alarm-snooze"></i>
          <span className="mr-1 font-medium text-md">
            Posted by
          </span> 
          <time className="mr-3">
            {dayjs(poke.createdAt).fromNow()}
          </time>
          <i className='mr-2 relative inset-0.5 text-lg text-green-400 bx bxs-mask'></i>
          <span className="mr-1 font-medium text-md">
            Last viewed
          </span> 
          <time className="mr-3">
            {dayjs(poke.updatedAt).fromNow()}
          </time>
          <i className="mr-1 relative inset-0.5 text-lg text-green-400 bx bxs-heart-circle"></i>
          <span className="mr-1 font-medium text-md">
            Pokes
          </span>
          <span className="text-sm font-extralight">
            { poke.totalClicks }
          </span>
        </small>
        <p className="mt-4 text-sm font-extralight text-black-200">
          { poke.desc }
        </p>
      </div>
    </a>
  )
}

export default NewsFeedCard
