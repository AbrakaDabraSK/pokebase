/* eslint-disable jsx-a11y/alt-text */
import {
  LinkCardProps
} from '../../../types'

// @components
import Container from './block/container'
import Link from './block/link'
import Image from './block/image'
import Body from './block/body'
import Domain from './block/domain'
import Title from './block/title'
import Meta from './block/meta/meta'
import Desc from './block/desc'
import Keywords from './block/keywords'

const LinkCard: React.FC<LinkCardProps> = ({ link }) => (
  <Container>
    {/** Image **/}
    <Link
      id={link.id}
      url={link.url}
    >
      <Image src={link.image} />
    </Link>

    {/** Information */}
    <Body>
      <Domain name={link.domain} />
      <Link
        id={link.id}
        url={link.url}
      >
        <Title value={link.title} />
        <Meta 
          createdAt={link.createdAt}
          updatedAt={link.updatedAt}
          totalClicks={link.totalClicks}
        />
        <Desc value={link.desc} />
      </Link>
      <Keywords value={link.keywords} />
    </Body>
  </Container>
)

export default LinkCard
