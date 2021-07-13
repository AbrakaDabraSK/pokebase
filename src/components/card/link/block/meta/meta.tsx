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
  createdAt, updatedAt, totalClicks 
}) => {
  return (
    <small className="text-gray-500">
      <PostedBy createdAt={createdAt} />
      <LastViewed updatedAt={updatedAt} />
      <Pokes totalClicks={totalClicks} />
    </small>
  )
}

export default Meta
