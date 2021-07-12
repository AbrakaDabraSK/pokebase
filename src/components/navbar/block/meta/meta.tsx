import Image from './block/image'
import Title from './block/title'

const Meta: React.FC<any> = ({ hit }) => {
  return (
    <>
      {/* Image */}
      <Image src={hit.image} />

      {/* Info */}
      <div className="flex flex-col">

        {/* Title */}
        <Title value={hit.title} />
      
        {/* Meta */}

      </div>
    </>
  )
}

export default Meta
