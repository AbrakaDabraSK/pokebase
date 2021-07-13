import database from '../database'

import {
  Direction
} from '../enums'

import {
  ListOfLinksInterface
} from '../types'
export default class ListOfLinks implements ListOfLinksInterface {
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

  public async get(
    perPage: number,
    currentPage: number,
    column: string,
    direction: string
  ) {
    try {
      const startIndex = ((currentPage * perPage) - perPage) + 1
      const endIndex = (currentPage * perPage)

      const { data } = await database
        .from('link')
        .select('*')
        .range(startIndex, endIndex)
        .order(column, { ascending: direction === Direction.ASC??false })
      
      return data??[]
    } catch(error) {
      throw new Error(error)
    }
  }
}
