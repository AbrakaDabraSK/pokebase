const Image: React.FC<any> = ({ src }) => {
  return (
    <>
      {src && (
        <div 
          className="w-full h-48 bg-gray-200 bg-center bg-no-repeat bg-contain shadow-inner sm:h-52 md:h-72"
          style={{
            backgroundImage: `url('${src}')`,
          }}
        ></div>
      )}
    </>
  )
}

export default Image
