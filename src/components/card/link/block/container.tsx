const Container: React.FC<any> = ({ children }) => (
  <article className="relative block mb-4 overflow-hidden break-words bg-white border-white shadow-md cursor-pointer rounded-2xl border-lg min-w-340">
    {children}
  </article>
)

export default Container
