import Link from 'next/link'

import {
  ShareLinkProps
} from '../../../../types'

const ShareLink: React.FC<ShareLinkProps> = ({ link }) => (
  <Link 
    href={`/sharelink/${link.identifier}/${link.domain}/${link.slug}`}
  >
    <a className="ml-2">
      <i className="text-lg font-semibold text-green-300 bx bxs-share-alt"></i>
    </a>
  </Link>
)

export default ShareLink
