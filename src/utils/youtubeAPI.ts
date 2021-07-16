import axios from 'axios'

import {
  YTResponse,
  YoutubeAPIInterface
} from '../types'

// @utils
import {
  getYTembedKeyFromURL
} from '../utils/helpers'

/**
 *
 *
 * @export
 * @class YoutubeAPI
 * @implements {YoutubeAPIInterface}
 */
export default class YoutubeAPI implements YoutubeAPIInterface {
  readonly key: string

  /**
   * 
   * @param url 
   */
  constructor(url: string) {
    this.key = getYTembedKeyFromURL(url)
  }

  /**
   * 
   * @returns 
   */
  public async get() {
    try {
      const video = await this.find()

      const data: YTResponse = {
        url: this.url(),
        domain: process.env.YOUTUBE_DOMAIN,
        image: this.image(video),
        title: this.title(video),
        desc: this.desc(video),
        keywords: this.tags(video)
      }

      return data
    } catch(error) {
      throw new Error(error)
    }
  }

  /**
   * 
   * @returns 
   */
  private async find() {
    const url = this.api()

    try {
      const res = await axios({
        url,
        method: 'get',
        headers: { 'User-Agent': process.env.USER_AGENT }
      })
      
      return res.data
    } catch(error) {
      throw new Error(error)
    }
  }

  /**
   * 
   * @returns 
   */
  private api(): string {
    return process.env.YOUTUBE_ENDPOINT+this.key+'&key='+process.env.YOUTUBE_API_KEY
  }

  /**
   * 
   * @returns 
   */
  private url(): string {
    return process.env.YOUTUBE_BASE_URL+this.key
  }

  /**
   * 
   * @param data 
   * @returns 
   */
  private image(data: any): string {
    if (typeof data.items[0].snippet.thumbnails.maxres !== 'undefined') {
      return data.items[0].snippet.thumbnails.maxres.url
    }
    if (typeof data.items[0].snippet.thumbnails.standard !== 'undefined') {
      return data.items[0].snippet.thumbnails.standard.url
    }
    if (typeof data.items[0].snippet.thumbnails.high !== 'undefined') {
      return data.items[0].snippet.thumbnails.high.url
    }
    if (typeof data.items[0].snippet.thumbnails.medium !== 'undefined') {
      return data.items[0].snippet.thumbnails.medium.url
    }
    if (typeof data.items[0].snippet.thumbnails.default !== 'undefined') {
      return data.items[0].snippet.thumbnails.default.url
    }
    return ''
  }

  /**
   * 
   * @param data 
   * @returns 
   */
  private title(data: any): string {
    return data.items[0].snippet.title
  }

  /**
   * 
   * @param data 
   * @returns 
   */
  private desc(data: any): string {
    return data.items[0].snippet.description
  }

  /**
   * 
   * @param data 
   * @returns 
   */
  private tags(data: any): string {
    const tags = data.items[0].snippet.tags
    return typeof tags === "undefined" ? '' : tags.join(',')
  }
}
