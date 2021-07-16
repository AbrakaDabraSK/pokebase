import {
  LinkCardProps
} from '../../../types'

// @block
import Container from './block/container'
import Header from './block/header'
import Body from './block/body'
import Link from './block/link'
import ActionBar from './block/actionBar'
import Domain from './block/domain'
import ShareLink from './block/shareLink'
import CommentLink from './block/commentLink'
import Title from './block/title'
import Meta from './block/meta'
import Desc from './block/desc'
import Keywords from './block/keywords'

const LinkCard: React.FC<LinkCardProps> = ({ link }) => (
  <Container>
    <Header link={link} />
    <Body>
      <ActionBar>
        <Domain value={link.domain} />
        <ShareLink link={link} />
        <CommentLink link={link} />
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
