import Link from 'next/link'

const Brand: React.FC = () => (
  <Link href="/">
    <a className="flex items-center justify-center">
      <i className="mr-1 text-4xl sm:text-3xl bx bxs-face-mask"></i>
      <span className="hidden text-xl font-semibold text-black lg:inline-block sm:mb-1">
        pokebase
      </span>
    </a>
  </Link>
)

export default Brand
