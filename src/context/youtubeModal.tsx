import { createContext, useReducer } from 'react'

import {
  ContextAction,
  YoutubeModalContextState
} from '../types'

// @YoutubeModalContext
const YoutubeModalContext = createContext(null)

/**
 *
 *
 * @param {YoutubeModalContextState} state
 * @param {YoutubeModalContextAction} { type, payload }
 * @return {*} 
 */
const reducer = (state: YoutubeModalContextState, { type, payload }: ContextAction) => {
  switch (type) {
    case 'UPDATE':
      return payload
    default:
      throw new Error(`Unknow action type: ${type}`)
  }
}

// @YoutubeModalProvider
export const YoutubeModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, defaultDispatch] = useReducer(reducer, {
    isPlayed: false,
    url: ''
  })

  const { isPlayed, url } = state

  const dispatch = (type: string, payload?: any) => defaultDispatch({ type, payload })

  const playVideo = (url: string) => {
    dispatch('UPDATE', { url, isPlayed: true })
  }

  const stopVideo = () => {
    dispatch('UPDATE', { url: '', isPlayed: false })
  }

  return (
    <YoutubeModalContext.Provider value={{ isPlayed, url, playVideo, stopVideo  }}>
      {children}
    </YoutubeModalContext.Provider>
  )
}

export default YoutubeModalContext
