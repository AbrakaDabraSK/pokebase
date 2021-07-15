import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import {
  LinkCardMetaLastViewedProps
} from '../../../../../../types'

dayjs.extend(relativeTime)

const LastViewed: React.FC<LinkCardMetaLastViewedProps> = ({ updatedAt }) => (
  <>
    {/** Icon **/}
    <i className='mr-2 relative inset-0.5 text-lg text-green-400 bx bxs-time-five'></i>

    {/** Title **/}
    <span className="mr-1 font-medium text-md">
      Last viewed
    </span>

    {/** Time **/}
    <time className="mr-3">
      {dayjs(updatedAt).fromNow()}
    </time>
  </>
)

export default LastViewed
