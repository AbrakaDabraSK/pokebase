const Header: React.FC = () => (
  <header className="relative px-4 py-4 mb-4 shadow-md rounded-xl bg-gradient-to-br from-green-500 to-green-300 min-w-340">
    {/** Shape **/}
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `url('/img/shapes/shape_7.png`,
      }}
    ></div>

    {/** Header **/}
    <h3 className="pl-1.5 md:pl-0 mt-1 mb-2 flex items-center justify-start text-white">

      {/** Icon **/}
      <i className="text-4xl font-medium bx bx-bookmark-heart"></i>

      {/** Title **/}
      <span className="pl-4 ml-4 border-l-4 border-white">
        <span className="text-3xl font-extrabold">
          Newsfeed
        </span>
        <small className="block text-sm font-medium sm:text-base">
          Check what members poke up!
        </small>
      </span>
      
    </h3>
  </header>
)

export default Header
