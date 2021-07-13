import Image from './block/image'
import Body from './block/body'
import Title from './block/title'

const Meta: React.FC<any> = ({ hit }) => {
  return (
    <>
      <Image src={hit.image} />
      <Body>
        <Title value={hit.title} />
      </Body>
    </>
  )
}

export default Meta
