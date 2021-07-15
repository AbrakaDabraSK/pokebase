const Image: React.FC<any> = ({ src }) => {
  return (
    <>
      {src && (
        <div 
          className="w-full bg-gray-200 bg-center bg-no-repeat bg-cover shadow-inner h-72 sm:h-52 md:h-64 xl:h-72"
          style={{
            backgroundImage: `url('${src}')`,
          }}
        ></div>
      )}
    </>
  )
}

export default Image
