import Link from 'next/link'

import {
  LinkCardCommentLinkProps
} from '../../../../types'

const CommentLink: React.FC<LinkCardCommentLinkProps> = ({ link }) => (
  <Link href={`/sharelink/${link.identifier}/${link.domain}/${link.slug}`}>
    <a className="flex items-center justify-start ml-2 group">
      <i className="font-semibold text-green-300 transition duration-300 ease-in-out delay-75 text-md sm:text-xl bx bx-comment-dots group-hover:text-green-500"></i>
      <span className="ml-2 font-semibold text-gray-500 group-hover:text-gray-600 text-md">
        Comments
      </span>
    </a>
  </Link>
)

export default CommentLink
