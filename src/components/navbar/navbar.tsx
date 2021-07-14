import Brand from './block/brand'
import Search from './block/search'
import ActionBar from './block/actionBar'

const NavBar: React.FC = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-10 flex items-center justify-between h-12 px-1.5 sm:px-5 bg-white shadow-md">
      <Brand />
      <Search />
      <ActionBar />
    </nav>
  )
}

export default NavBar
