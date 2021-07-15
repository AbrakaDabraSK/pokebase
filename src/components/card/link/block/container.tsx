const Container: React.FC = ({ children }) => (
  <article className="relative block mb-4 overflow-hidden break-words bg-white border-white shadow-md cursor-pointer rounded-xl min-w-340 border-lg">
    {children}
  </article>
)

export default Container
