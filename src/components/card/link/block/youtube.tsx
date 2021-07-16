
import { useContext } from 'react'

import {
  LinkCardYoutubeProps
} from '../../../../types'

// @context
import YoutubeModalContext from '../../../../context/youtubeModal'

const Youtube: React.FC<LinkCardYoutubeProps> = ({ link }) => {
  const { playVideo } = useContext(YoutubeModalContext)
  
  return (  
    <div 
      className="relative w-full bg-gray-200 bg-center bg-no-repeat bg-cover shadow-inner h-72 sm:h-52 md:h-64 xl:h-72"
      style={{
        backgroundImage: `url('${link.image}')`,
      }}
      onClick={() => playVideo(link.url)}
    >
      <div className="absolute flex items-center justify-center w-8 h-8 bg-green-300 rounded-full top-2 right-2">
        <i className="font-medium text-white text-md bx bx-play-circle"></i>
      </div>
    </div>
  )
}

export default Youtube
