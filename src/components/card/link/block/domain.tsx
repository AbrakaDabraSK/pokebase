import {
  hasYoutubeDomain
} from '../../../../utils/helpers'

const Domain: React.FC<any> = ({ value }) => {
  return (
    <span className="flex items-center justify-center px-3 py-1.5 font-bold text-md text-white transition duration-300 ease-in-out delay-75 bg-green-400 rounded-lg hover:bg-green-500">
      {(hasYoutubeDomain(value) ? (
        <i className="bx bxl-youtube"></i>
      ) : (
        <i className="bx bx-globe"></i>
      ))}
      <span className="ml-1 font-extrabold">
        { value }
      </span>
    </span>
  )
}

export default Domain
