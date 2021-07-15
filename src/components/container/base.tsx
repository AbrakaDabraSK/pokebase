import Main from '../../components/main'
import NavBar from '../navbar'

const BaseContainer: React.FC = ({ children }) => (
  <>
    <NavBar />
    <Main>{children}</Main>
  </>
)

export default BaseContainer
