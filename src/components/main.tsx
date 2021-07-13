const Main: React.FC = ({ children }) => (
  <main className="flex items-start justify-center min-h-screen">
    <section className="flex-1 px-3 mx-auto mt-16 sm:mt-8 md:p-10 max-w-1/4">
      {children}
    </section>
  </main>
)

export default Main
