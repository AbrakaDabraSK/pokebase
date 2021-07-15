const Container: React.FC<any> = ({ children }) => (
  <article className="relative block mb-4 overflow-hidden break-words bg-white border-white shadow-md cursor-pointer rounded-2xl min-w-340 border-lg">
    {children}
  </article>
)

export default Container
