import database from '../database'

import {
  LinkColumns,
  LinkColumnsLength
} from '../enums'

import {
  LinkInterface,
  CrawlerLinkResponse,
  YTResponse
} from '../types'

// @kernel
import LinkIndex from './linkIndex'

// @utils
import {
  makeId,
  slugify,
  truncate,
  getDomainFromURL
} from '../utils/helpers'

import Crawler from '../utils/crawler'
import YoutubeAPI from '../utils/youtubeAPI'

/**
 *
 *
 * @export
 * @class Link
 * @implements {LinkInterface}
 */
export default class Link implements LinkInterface {
  readonly tableName: string = 'link'

  /**
   * 
   * @param url 
   * @returns 
   */
  public async hasURL(url: string) {
    try {
      const { data } = await database
        .from(this.tableName)
        .select(LinkColumns.id)
        .eq(LinkColumns.url, url)
        .limit(1)

      return 1 === data.length
    } catch(error) {
      throw new Error(error)
    }
  }

  /**
   * 
   * @param url 
   * @returns 
   */
  public async meta(url: string) {
    // @Youtube
    if (getDomainFromURL(url) === process.env.YOUTUBE_DOMAIN)
      return await this.metaFromYoutube(url)

    // @URL
    return await this.metaFromURL(url)
  }

  /**
   * 
   * @param identifier 
   * @param domain 
   * @param slug 
   * @returns 
   */
  public async byRoute(
    identifier: string, 
    domain: string, 
    slug: string
  ) {
    try {
      const { data } = await database
        .from(this.tableName)
        .select("*")
        .eq(LinkColumns.identifier, identifier)
        .eq(LinkColumns.domain, domain)
        .eq(LinkColumns.slug, slug)
        .single()

      return data
    } catch(error) {
      return error.message
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
        .from(this.tableName)
        .select("*")
        .eq(LinkColumns.id, id)
        .single()

      return data
    } catch(error) {
      return error.message
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
      const data = await this.byID(id)

      await new LinkIndex().update(data)
    } catch(error) {
      throw new Error(error)
    }
  }

  /**
   * 
   * @param url 
   * @returns 
   */
  public async create(url: string) {
    try {
      const meta = await this.meta(url)
      
      const title: string = truncate(meta.title, LinkColumnsLength.title)
      const desc: string = truncate(meta.desc, LinkColumnsLength.desc)
      
      const record = {
        url,
        title,
        desc,
        keywords: meta.keywords,
        domain: meta.domain,
        image: meta.image,
        identifier: makeId(7),
        slug: slugify(title)
      }
      const { data } = await database
        .from(this.tableName)
        .insert([record])

      await new LinkIndex().create(data[0])

      return data
    } catch(error) {
      throw new Error(error)
    }
  }  

  /**
   * Internal methods
   */

  /**
   * 
   * @param url 
   * @returns 
   */
  private async metaFromURL(url: string) {
    try {
      const meta: CrawlerLinkResponse = await new Crawler().link(url)

      return meta
    } catch(error) {
      throw new Error(error)
    }
  }

  /**
   * 
   * @param url 
   * @returns 
   */
  private async metaFromYoutube(url: string) {
    try {
      const meta: YTResponse = await new YoutubeAPI(url).get()
      
      return meta
    } catch(error) {
      throw new Error(error)
    }
  }
}
