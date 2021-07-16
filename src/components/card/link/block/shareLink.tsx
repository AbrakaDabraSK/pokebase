import Link from 'next/link'

import {
  ShareLinkProps
} from '../../../../types'

const ShareLink: React.FC<ShareLinkProps> = ({ link }) => (
  <Link 
    href={`/sharelink/${link.identifier}/${link.domain}/${link.slug}`}
  >
    <a className="ml-2">
      <i className="text-lg font-semibold text-green-300 transition duration-300 ease-in-out delay-75 bx bxs-share-alt hover:text-green-500"></i>
    </a>
  </Link>
)

export default ShareLink
