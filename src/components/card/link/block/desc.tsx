import {
  truncate
} from '../../../../utils/helpers'

const Desc: React.FC<any> = ({ value }) => {
  return (
    <p className="mt-4 text-md font-extralight text-black-200">
      {truncate(value, 555)}
    </p>
  )
}

export default Desc
