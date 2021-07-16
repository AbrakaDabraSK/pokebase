import {
  ShareLinkProps
} from '../../../../types'

const ShareLink: React.FC<ShareLinkProps> = ({ link }) => (
  <a
    href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_BASE_URL}/sharelink/${link.identifier}/${link.domain}/${link.slug}`} 
    target="_blank"
    rel="noopener noreferrer"
    className="ml-4"
  >
    <i className="text-xl font-semibold text-green-300 transition duration-300 ease-in-out delay-75 bx bxs-share-alt hover:text-green-500"></i>
  </a>
)

export default ShareLink
