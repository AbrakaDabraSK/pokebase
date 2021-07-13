const Row: React.FC = ({ children }) => (
  <section className="grid grid-cols-1 grid-rows-1 2xl:grid-cols-3 xl:gap-4">
    {children}
  </section>
)

export default Row
