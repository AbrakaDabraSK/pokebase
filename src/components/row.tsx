const Row: React.FC = ({ children }) => (
  <section className="grid grid-cols-1 gap-1 mt-4 md:gap-4 sm:grid-cols-2 md:grid-cols-3 md-gap-8">
    {children}
  </section>
)

export default Row
