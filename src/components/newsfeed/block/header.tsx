const Header: React.FC = () => (
  <header className="relative px-4 py-6 mb-4 shadow-md rounded-xl bg-gradient-to-br from-green-500 to-green-300">
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `url('/img/shapes/shape_7.png`,
      }}
    ></div>
    <h3 className="pl-1.5 md:pl-0 mt-1 mb-2 text-2xl font-bold flex items-center justify-start text-white">
      <i className="text-6xl font-semibold bx bx-bookmark-heart"></i>
      <span className="pl-4 ml-4 border-l-4 border-white">
        <span className="text-5xl font-extrabold">
          Newsfeed
        </span>
        <small className="block text-sm font-medium sm:text-base md:text-lg">
          Check what members poke up!
        </small>
      </span>
    </h3>
  </header>
)

export default Header
