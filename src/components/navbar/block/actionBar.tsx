import Link from 'next/link'

const ActionBar: React.FC = () => {
  return (
    <div className="flex items-stretch justify-start">
      <div className="relative flex items-center flex-grow-0 flex-shrink-0">
        <Link href="/poke/create">
          <a className="relative flex items-center justify-center bg-green-400 rounded-md shadow-md w-9 h-9">
            <i className="text-white bx bxs-book-add"></i>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default ActionBar
