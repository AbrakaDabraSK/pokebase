import {
  LinkCardShareLinkProps
} from '../../../../types'

const ShareLink: React.FC<LinkCardShareLinkProps> = ({ link }) => (
  <a
    href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_BASE_URL}/sharelink/${link.identifier}/${link.domain}/${link.slug}`} 
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-start ml-4 group"
  >
    <i className="text-xl font-semibold text-green-300 transition duration-300 ease-in-out delay-75 bx bxs-share-alt group-hover:text-green-500"></i>
    <span className="ml-2 font-semibold text-gray-500 group-hover:text-gray-600 text-md">
      Share
    </span>
  </a>
)

export default ShareLink
