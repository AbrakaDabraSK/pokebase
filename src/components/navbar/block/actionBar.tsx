import Link from 'next/link'

const ActionBar: React.FC = () => (
  <div className="flex items-stretch justify-start">
    <div className="relative flex items-center flex-grow-0 flex-shrink-0">
      <Link href="https://github.com/AbrakaDabraSK/pokebase">
        <a target="_blank" className="relative items-center justify-center hidden mr-2 bg-green-400 rounded-md shadow-md md:flex w-9 h-9">
          <i className="text-white bx bxl-github"></i>
        </a>
      </Link>
      <Link href="/poke/create">
        <a className="relative flex items-center justify-center bg-green-400 rounded-md shadow-md w-9 h-9">
          <i className="text-white bx bxs-book-add"></i>
        </a>
      </Link>
    </div>
  </div>
)

export default ActionBar
