const Main: React.FC = ({ children }) => (
  <main className="flex items-center justify-start min-h-screen">
    <section className="flex-1 p-3 mx-auto md:p-10 max-w-1/4">
      {children}
    </section>
  </main>
)

export default Main
