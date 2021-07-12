import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import PostedBy from './block/postedBy'
import LastViewed from './block/lastViewed'
import Pokes from './block/pokes' 

import {
  LinkCardMetaProps
} from '../../../../../types'

dayjs.extend(relativeTime)

const Meta: React.FC<LinkCardMetaProps> = ({ 
  createdAt, 
  updatedAt, 
  totalClicks 
}) => {
  return (
    <small className="text-gray-500">
      <div className="hidden sm:inline">
        {/* Posted by */}
        <PostedBy createdAt={createdAt} />

        {/* Last viewed */}
        <LastViewed updatedAt={updatedAt} />
      </div>
      {/* Pokes */}
      <Pokes totalClicks={totalClicks} />
    </small>
  )
}

export default Meta
