import Link from 'next/link'

const Title: React.FC = () => {
  return (
    <div className="flex items-center">
      <Link href="/">
        <a>
          <span className="font-semibold text-black">
            pokebase
          </span>
        </a>
      </Link>
    </div>
  )
}

export default Title