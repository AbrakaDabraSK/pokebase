import Axios from 'axios'

import {
  LinkCardHyperLinkProps
} from '../../../../types'

const Link: React.FC<LinkCardHyperLinkProps> = ({ 
  id, url, children 
}) => {
  const newClick = async (id: string) => {
    try {
      await Axios.get('/link/'+id+'/clicked')
    } catch (error) {
      console.error(error)
    }
  }
  
  return (  
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => newClick(id)}
    >
      {children}
    </a>
  )
}

export default Link
