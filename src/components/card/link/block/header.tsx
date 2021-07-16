/* eslint-disable jsx-a11y/alt-text */
import {
  LinkCardHeaderProps
} from '../../../../types'

// @helpers
import {
  hasYoutubeDomain
} from '../../../../utils/helpers'

// @block
import Link from './link'
import Image from './image'
import Youtube from './youtube'

const Header: React.FC<LinkCardHeaderProps> = ({ link }) => (
  <header>
    {(hasYoutubeDomain(link.domain) ? (
      <Youtube link={link} />
    ) : (
      <Link
        id={link.id}
        url={link.url}
      >
        <Image src={link.image} />
      </Link>
    ))}
  </header>
)

export default Header
