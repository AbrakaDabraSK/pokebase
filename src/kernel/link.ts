import database from '../database'
import searchdatabase from '../searchClient'
import Crawler from '../utils/crawler'
import YoutubeAPI from '../utils/youtubeAPI'

import { 
  Poke,
  LinkInterface,
  CrawlerLinkResponse,
  YTResponse
} from '../types'

import {
  getDomainFromURL
} from '../utils/helpers'

/**
 *
 *
 * @export
 * @class Link
 * @implements {LinkInterface}
 */
export default class Link implements LinkInterface {
  readonly indexName: string = 'link'

  /**
   * 
   * @param url 
   * @returns 
   */
  public async hasURL(url: string) {
    try {
      const { data } = await database
        .from('link')
        .select("id")
        .eq('url', url)
        .limit(1)

      return 1 === data.length
    } catch(error) {
      throw new Error(error)
    }
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  public async byID(id: string) {
    try {
      const { data } = await database
        .from('link')
        .select("*")
        .eq('id', id)
        .single()

      return data
    } catch(error) {
      return error.message
    }
  }

  /**
   * 
   * @param url 
   * @returns 
   */
  public async create(url: string) {
    try {
      if (getDomainFromURL(url) === process.env.YOUTUBE_DOMAIN)
        return await this.createFromYoutube(url)

      return await this.createFromURL(url)
    } catch(error) {
      throw new Error(error)
    }
  }

  /**
   * 
   * @param id 
   */
  public async clicked(id: string) {
    try {
      await database.rpc('increment', { 
        x: 1, 
        row_id: id 
      })
    } catch(error) {
      throw new Error(error)
    }
  }

  /**
   * 
   * @param url 
   * @returns 
   */
  private async createFromURL(url: string) {
    try {
      const meta: CrawlerLinkResponse = await new Crawler().link(url)
      const { data } = await database
        .from('link')
        .insert([meta])
      
      await this.createIndex(data[0])

      return data
    } catch(error) {
      throw new Error(error)
    }
  }

  /**
   * 
   * @param url 
   * @returns 
   */
  private async createFromYoutube(url: string) {
    try {
      const meta: YTResponse = await new YoutubeAPI(url).get()
      const { data } = await database
        .from('link')
        .insert([meta])

      await this.createIndex(data[0])

      return data
    } catch(error) {
      throw new Error(error)
    }
  }

  /**
   * 
   * @param data 
   */
  private async createIndex(data: Poke) {
    const index = searchdatabase.initIndex(this.indexName)
    const objectID: string = data.id
    const objectData = {
      objectID,
      ...data
    }
    await index.saveObjects([objectData])
  }
}
