/* eslint-disable jsx-a11y/alt-text */
import {
  LinkCardProps
} from '../../../types'

// @block
import Container from './block/container'
import Link from './block/link'
import ShareLink from './block/shareLink'
import Image from './block/image'
import Body from './block/body'
import ActionBar from './block/actionBar'
import Domain from './block/domain'
import Title from './block/title'
import Meta from './block/meta'
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
      <ActionBar>
        <Domain name={link.domain} />
        <ShareLink link={link} />
      </ActionBar>
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
