import Link from 'next/link'

const ActionBar: React.FC = () => (
  <div className="flex items-stretch justify-start">
    <div className="relative flex items-center flex-grow-0 flex-shrink-0">
      <Link href="https://github.com/AbrakaDabraSK/pokebase">
        <a 
          target="_blank"
          title="GitHub Repository" 
          className="relative items-center justify-center hidden mr-2 transition duration-300 ease-in-out delay-75 bg-green-400 rounded-md shadow-md hover:bg-green-500 md:flex w-9 h-9"
        >
          <i className="text-xl font-semibold text-white bx bxl-github"></i>
        </a>
      </Link>
      <Link href="/poke/create">
        <a 
          title="Create a poke"
          className="relative flex items-center justify-center transition duration-300 ease-in-out delay-75 bg-green-400 rounded-md shadow-md w-9 h-9 hover:bg-green-500"
        >
          <i className="text-xl font-semibold text-white bx bxs-book-add"></i>
        </a>
      </Link>
    </div>
  </div>
)

export default ActionBar
