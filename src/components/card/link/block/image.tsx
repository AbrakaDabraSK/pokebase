const Image: React.FC<any> = ({ src }) => {
  console.log(src)
  return (
    <>
      {src && (
        <div 
          className="w-full h-64 bg-center bg-no-repeat bg-cover md:h-96"
          style={{
            backgroundImage: `url('${src}')`,
          }}
        ></div>
      )}
    </>
  )
}

export default Image
