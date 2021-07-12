import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import {
  LinkCardMetaPokesProps
} from '../../../../../../types'

dayjs.extend(relativeTime)

const Pokes: React.FC<LinkCardMetaPokesProps> = ({ totalClicks }) => {
  return (
    <>
      <i className="mr-1 relative inset-0.5 text-lg text-green-400 bx bxs-heart-circle"></i>
      <span className="mr-1 font-medium text-md">
        Pokes
      </span>
      <span className="text-sm font-extralight">
        { totalClicks }
      </span>
    </>
  )
}

export default Pokes
