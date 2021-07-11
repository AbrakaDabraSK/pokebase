import {
  NewsFeedCardProps
} from '../../types'

const NewsFeedCard: React.FC<NewsFeedCardProps> = ({ poke }) => {
  return (
    <article className="flex mb-4 bg-white rounded shadow-md cursor-pointer">
      <a 
        className="relative block w-full"
        href={poke.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="block w-full mx-auto min-h-150"
          src={poke.image}
          alt={poke.title}
        />
        <div className="px-3 mt-3">
          <span className="items-center p-1 mb-1 text-sm font-semibold text-white bg-blue-500 rounded">
            {poke.domain === 'youtube.com' && (
              <i className="relative mr-1 inset-0.5 text-md bx bxl-youtube" ></i>
            )}
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
    </article>
  )
}

export default NewsFeedCard