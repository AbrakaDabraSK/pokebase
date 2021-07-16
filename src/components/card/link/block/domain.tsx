const Domain: React.FC<any> = ({ name }) => {
  return (
    <span className="items-center px-2 py-1 text-sm font-bold text-white transition duration-300 ease-in-out delay-75 bg-green-400 rounded-lg hover:bg-green-500">
      {(name === 'youtube.com' ? (
        <i className="relative mr-1 inset-0.5 text-md bx bxl-youtube"></i>
      ) : (
        <i className="relative mr-1 inset-0.5 text-md bx bxs-bone"></i>
      ))}
      <>{ name }</>
    </span>
  )
}

export default Domain
