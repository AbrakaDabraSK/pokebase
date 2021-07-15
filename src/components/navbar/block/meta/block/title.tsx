import {
  truncate
} from '../../../../../utils/helpers'

const Title: React.FC<any> = ({ value }) => {
  return (
    <span className="text-xs font-light md:text-sm">
      {truncate(value, 72)}
    </span>
  )
}

export default Title
