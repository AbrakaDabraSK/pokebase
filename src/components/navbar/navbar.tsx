import Title from './title'
import Search from './search'
import ActionBar from './actionBar'

const NavBar: React.FC = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-10 flex items-center justify-between h-12 px-5 bg-white shadow-md">
      {/* Title */}
      <Title />

      {/* Search */}
      <Search />

      {/* ActionBar */}
      <ActionBar />
    </nav>
  )
}

export default NavBar