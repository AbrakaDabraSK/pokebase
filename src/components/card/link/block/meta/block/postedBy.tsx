import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import {
  LinkCardMetaPostedByProps
} from '../../../../../../types'

dayjs.extend(relativeTime)

const PostedBy: React.FC<LinkCardMetaPostedByProps> = ({ createdAt }) => (
  <div className="hidden sm:items-center sm:justify-start sm:flex">
    {/** Icon **/}
    <i className="mr-1 text-xl text-green-400 bx bxs-calendar-star"></i>

    {/** Title **/}
    <span className="mr-1 font-medium text-md">
      Posted by
    </span>

    {/** Time **/}
    <time className="mr-3">
      {dayjs(createdAt).fromNow()}
    </time>
  </div>
)

export default PostedBy
