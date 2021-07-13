import Link from 'next/link'

const Brand: React.FC = () => {
  return (
    <div className="flex items-center">
      <Link href="/">
        <a>
          <i className="relative mr-1 inset-0.5 text-xl bx bxs-face-mask"></i>
          <span className="hidden text-xl font-semibold text-black lg:inline">
            pokebase
          </span>
        </a>
      </Link>
    </div>
  )
}

export default Brand
