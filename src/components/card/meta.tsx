import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import {
  NewsFeedCardMetaProps
} from '../../types'

dayjs.extend(relativeTime)

const Meta: React.FC<NewsFeedCardMetaProps> = ({ 
  createdAt, 
  updatedAt, 
  totalClicks 
}) => {
  return (
    <small className="text-gray-500">
      <div className="hidden sm:inline">
        <i className="mr-1 text-green-400 bx bxs-alarm-snooze"></i>
        <span className="mr-1 font-medium text-md">
          Posted by
        </span> 
        <time className="mr-3">
          {dayjs(createdAt).fromNow()}
        </time>
        <i className='mr-2 relative inset-0.5 text-lg text-green-400 bx bxs-mask'></i>
        <span className="mr-1 font-medium text-md">
          Last viewed
        </span> 
        <time className="mr-3">
          {dayjs(updatedAt).fromNow()}
        </time>
      </div>
      <i className="mr-1 relative inset-0.5 text-lg text-green-400 bx bxs-heart-circle"></i>
      <span className="mr-1 font-medium text-md">
        Pokes
      </span>
      <span className="text-sm font-extralight">
        { totalClicks }
      </span>
    </small>
  )
}

export default Meta
