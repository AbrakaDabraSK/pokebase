const Main: React.FC = ({ children }) => (
  <main className="flex items-start min-h-screen">
    <div className="flex-1 max-w-4xl mx-auto p-14">
      {children}
    </div>
  </main>
)

export default Main
