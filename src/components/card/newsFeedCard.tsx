import {
  NewsFeedCardProps
} from '../../types'

const NewsFeedCard: React.FC<NewsFeedCardProps> = ({ poke }) => {
  return (
    <a 
      className="relative block m-4 overflow-hidden break-words bg-white rounded-lg shadow-lg cursor-pointer md:mb-4"
      href={poke.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div 
        className="w-full h-64 bg-center bg-no-repeat bg-cover md:h-96"
        style={{
          backgroundImage: `url('${poke.image}')`,
        }}
      ></div>
      <div className="w-full h-auto px-3 pb-3 mt-3">
        <span className="items-center px-2 py-1 mb-1 text-sm font-bold text-white bg-green-400 rounded-lg">
          {(poke.domain === 'youtube.com' ? (
            <i className="relative mr-1 inset-0.5 text-md bx bxl-youtube"></i>
          ) : (
            <i className="relative mr-1 inset-0.5 text-md bx bxs-bone"></i>
          ))}
          { poke.domain }
        </span>
        <h4 className="mt-2 mb-2 text-lg font-extrabold text-black-900">
          { poke.title }
        </h4>
        <p className="mt-1 mb-2 text-sm font-extralight text-black-200">
          { poke.desc }
        </p>
      </div>
    </a>
  )
}

export default NewsFeedCard
