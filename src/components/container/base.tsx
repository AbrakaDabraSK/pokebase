import Main from '../../components/main'
import NavBar from '../../components/navbar/navbar'

const BaseContainer: React.FC = ({ children }) => (
  <>
    <NavBar />
    <Main>{children}</Main>
  </>
)

export default BaseContainer
