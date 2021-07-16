import { createContext, useReducer } from 'react'
import Axios from 'axios'

import {
  ContextAction,
  ObserverContextState
} from '../types'

// @ObserverContext
const ObserverContext = createContext(null)

/**
 *
 *
 * @param {ObserverContextState} state
 * @param {ContextAction} { type, payload }
 * @return {*} 
 */
const reducer = (state: ObserverContextState, { type, payload }: ContextAction) => {
  switch (type) {
    case 'START':
      return {
        ...state,
        loading: true
      }
    case 'LOADED':
      return { 
        ...state,
        loading: false,
        data: [...state.data, ...payload],
        more: payload.length > 0,
        after: state.after + 1
      }
    default:
      throw new Error(`Unknow action type: ${type}`)
  }
}

// @ObserverProvider
export const ObserverProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, defaultDispatch] = useReducer(reducer, {
    loading: false,
    more: true,
    data: [],
    after: 1
  })

  const { loading, data, after, more } = state

  const dispatch = (type: string, payload?: any) => defaultDispatch({ type, payload })

  const load = () => {
    dispatch('START')

    async function fetchData() {
      try {
        const { data } = await Axios.get(`/newsfeed?currentPage=${after}`)
        dispatch('LOADED', data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }

  return (
    <ObserverContext.Provider value={{ loading, data, more, load }}>
      {children}
    </ObserverContext.Provider>
  )
}

export default ObserverContext
