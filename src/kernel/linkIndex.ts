import sanitizer from 'string-sanitizer'
import searchClient from '../searchClient'

import { 
  Link,
  LinkIndexInterface
} from '../types'

// @utils
import {
  truncate
} from '../utils/helpers'

/**
 *
 *
 * @export
 * @class LinkIndex
 * @implements {LinkIndexInterface}
 */
export default class LinkIndex implements LinkIndexInterface {
  readonly attr: Array<string> = ['id', 'url', 'image', 'title']
  readonly indexName: string = 'link'
  readonly index: any = null
  readonly hitsPerPage: number = 25

  /**
   * Creates an instance of LinkIndex.
   * @memberof LinkIndex
   */
  constructor() {
    this.index = searchClient.initIndex(this.indexName)
  }
  
  /**
   * 
   * @param terms
   * @returns 
   */
  public async search(terms: string) {
    try {
      const sanitizeTerms = sanitizer.sanitize.keepSpace(truncate(terms, 255))
      const { hits } = await this.index.search(sanitizeTerms, {
        attributesToRetrieve: this.attr,
        hitsPerPage: this.hitsPerPage,
      })
      return hits??[]
    } catch(error) {
      throw new Error(error)
    }
  }

  /**
   * 
   * @param link 
   */
  public async create(link: Link) {
    try {
      const objectData = this.objectData(link)
      await this.index.saveObjects([objectData])
    } catch(error) {
      throw new Error(error)
    }
  }

  /**
   * 
   * @param link 
   */
  public async update(link: Link) {
    try {
      const objectData = this.objectData(link)
      await this.index.saveObjects([objectData])
    } catch(error) {
      throw new Error(error)
    }
  }

  /**
   * 
   * @param id 
   */
  public async delete(id: string) {
    try {
      await this.index.deleteObject(id)
    } catch(error) {
      throw new Error(error)
    }
  }

  /**
   * Internal methods
   */

  /**
   * 
   * @param link 
   * @returns 
   */
  private objectData(link: Link): Object {
    const objectID: string = link.id
    return {
      objectID,
      ...link
    }
  }
}
