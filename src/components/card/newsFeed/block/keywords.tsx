const Keywords: React.FC<any> = ({ value }) => {
  return (
    <>
      {value && (
        <div className="flex flex-wrap items-start justify-start mt-3">
          {value.split(',').map((keyword, index) => (
            <span 
              className="px-2 py-1 mb-1 mr-1 text-sm font-medium text-white bg-green-400 border-sm"
              key={index} 
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
