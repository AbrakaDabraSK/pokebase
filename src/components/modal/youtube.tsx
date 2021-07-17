import link from 'next/link'
import { useContext } from 'react'

// @context
import YoutubeModalContext from '../../context/youtubeModal'

// @utils
import {
  getYTembedKeyFromURL
} from '../../utils/helpers'

const YoutubeModal: React.FC = () => {
  const { isPlayed, url, stopVideo } = useContext(YoutubeModalContext)
  
  return (
    <>
      {isPlayed && (
        <section className="fixed inset-0 z-50 text-white bg-black p-7">
          <header className="flex items-center justify-between mx-auto xl:w-8/12">
            <h4 className="flex items-center justify-start">
              <i className="mr-3 text-4xl font-semibold text-red-600 bx bxl-youtube"></i>
              <strong>Youtube</strong>
            </h4>
            <button
              type="button"
              onClick={() => stopVideo()}
            >
              <i className="text-3xl font-extrabold text-gray-200 bx bx-window-close"></i>
            </button>
          </header>
          <section className="relative w-full mx-auto mt-6 h-52 sm:h-96 md:h-120 2xl:h-130 xl:w-8/12">
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${getYTembedKeyFromURL(url)}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              className="absolute inset-0 block w-full h-full"
            />
          </section>
        </section>
      )}
    </>
  )
}

export default YoutubeModal
