const Image: React.FC<any> = ({ src }) => {
  return (
    <>
      {(src ? (
        <div 
          className="hidden w-12 h-12 mr-2 bg-center bg-no-repeat bg-cover rounded-full shadow-md md:inline"
          style={{
            backgroundImage: `url('${src}')`,
          }}
        ></div>
      ) : (
        <div 
          className="hidden w-12 h-12 mr-2 bg-green-400 rounded-full shadow-md md:inline"
        ><i className="relative text-3xl font-bold text-white top-1.5 left-2 bx bx-image-alt"></i></div>
      ))}
    </>
  )
}

export default Image
