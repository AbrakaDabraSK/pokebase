const Keywords: React.FC<any> = ({ value }) => {
  return (
    <>
      {value && (
        <div className="flex flex-wrap items-start justify-start mt-3">
          {value.split(',').map((keyword, index) => (
            <span 
              key={index}
              className="px-2 py-1 mb-1 mr-1 text-sm font-semibold text-white transition duration-300 ease-in-out delay-75 bg-green-400 border-sm rounded-xl hover:bg-green-500" 
            >
              { keyword }
            </span>
          ))}
        </div>
      )}
    </>
  )
}

export default Keywords
