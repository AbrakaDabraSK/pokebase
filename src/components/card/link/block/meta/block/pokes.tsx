import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import {
  LinkCardMetaPokesProps
} from '../../../../../../types'

dayjs.extend(relativeTime)

const Pokes: React.FC<LinkCardMetaPokesProps> = ({ totalClicks }) => {
  return (
    <section className="flex items-center justify-start">
      <i className="mr-1 text-xl text-green-400 bx bxs-bug-alt"></i>
      <span className="mr-1 font-medium text-md">
        Pokes
      </span>
      <span className="text-sm font-extralight">
        { totalClicks }
      </span>
    </section>
  )
}

export default Pokes
