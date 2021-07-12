import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import {
  LinkCardMetaPostedByProps
} from '../../../../../../types'

dayjs.extend(relativeTime)

const Meta: React.FC<LinkCardMetaPostedByProps> = ({ createdAt }) => {
  return (
    <>
      <i className="mr-1 text-green-400 bx bxs-alarm-snooze"></i>
      <span className="mr-1 font-medium text-md">
        Posted by
      </span> 
      <time className="mr-3">
        {dayjs(createdAt).fromNow()}
      </time>
    </>
  )
}

export default Meta
