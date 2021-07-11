import Link from 'next/link'

const Title: React.FC = () => {
  return (
    <div className="flex items-center">
      <Link href="/">
        <a>
          <i className="relative mr-1 inset-0.5 text-xl bx bxs-face-mask"></i>
          <span className="text-xl font-semibold text-black hidden md:block">
            pokebase
          </span>
        </a>
      </Link>
    </div>
  )
}

export default Title
