import database from '../database'

import {
  Direction
} from '../enums'

import {
  ListOfLinksInterface
} from '../types'

// @utils
import {
  startIndex,
  endIndex
} from '../utils/helpers'

/**
 *
 *
 * @export
 * @class ListOfLinks
 * @implements {ListOfLinksInterface}
 */
export default class ListOfLinks implements ListOfLinksInterface {
  readonly tableName: string = 'link'
  
  /**
   * 
   * @returns 
   */
  public async total() {
    try {
      const { count } = await database
        .from(this.tableName)
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
        .from(this.tableName)
        .select('*')
        .order(column, { ascending: direction === Direction.ASC??false })
        .range(
          startIndex(currentPage, perPage), 
          endIndex(currentPage, perPage)
        )
      
      return data??[]
    } catch(error) {
      throw new Error(error)
    }
  }
}
