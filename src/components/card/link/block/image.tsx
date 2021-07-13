const Image: React.FC<any> = ({ src }) => {
  return (
    <>
      {src && (
        <div 
          className="w-full h-40 bg-gray-200 bg-center bg-no-repeat bg-cover shadow-inner sm:h-52 md:h-48 xl:bg-contain xl:h-72"
          style={{
            backgroundImage: `url('${src}')`,
          }}
        ></div>
      )}
    </>
  )
}

export default Image
