import database from '../database'

import {
  Direction
} from '../enums'

import {
  ListOfLinksInterface
} from '../types'

import {
  startIndex,
  endIndex
} from '../utils/helpers'
export default class ListOfLinks implements ListOfLinksInterface {
  /**
   * 
   * @returns
   */
  public async total() {
    try {
      const { count } = await database
        .from('link')
        .select('*', { count: 'exact' })

      return count??0
    } catch(error) {
      throw new Error(error)
    }
  }

  /**
   * 
   * @param perPage 
   * @param currentPage 
   * @param column 
   * @param direction 
   * @returns
   */
  public async get(
    perPage: number,
    currentPage: number,
    column: string,
    direction: string
  ) {
    try {
      const { data } = await database
        .from('link')
        .select('*')
        .range(
          startIndex(currentPage, perPage), 
          endIndex(currentPage, perPage)
        )
        .order(column, { ascending: direction === Direction.ASC??false })
      
      return data??[]
    } catch(error) {
      throw new Error(error)
    }
  }
}
