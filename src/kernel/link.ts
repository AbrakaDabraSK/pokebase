import client from '../client'
import Crawler from '../utils/crawler'
import YoutubeAPI from '../utils/youtubeAPI'

import { 
  CrawlerLinkResponse,
  YTResponse
} from '../types'

import {
  getDomainFromURL
} from '../utils/helpers'


export default class Link {
  public async hasURL(url: string) {
    try {
      const { data } = await client
        .from('link')
        .select("id")
        .eq('url', url)
        .limit(1)

      return 1 === data.length
    } catch(error) {
      throw new Error(error)
    }
  }

  public async byID(id: string) {
    try {
      const { data } = await client
        .from('link')
        .select("*")
        .eq('id', id)
        .single()

      return data
    } catch(error) {
      return error.message
    }
  }

  public async create(url: string) {
    try {
      if (getDomainFromURL(url) === process.env.YOUTUBE_DOMAIN)
        return await this.createFromYoutube(url)

      return await this.createFromURL(url)
    } catch(error) {
      throw new Error(error)
    }
  }

  public async clicked(id: string) {
    try {
      await client.rpc('increment', { 
        x: 1, 
        row_id: id 
      })
    } catch(error) {
      throw new Error(error)
    }
  }

  private async createFromURL(url: string) {
    try {
      const meta: CrawlerLinkResponse = await new Crawler().link(url)
      const { data } = await client
        .from('link')
        .insert([meta])

      return data
    } catch(error) {
      throw new Error(error)
    }
  }

  private async createFromYoutube(url: string) {
    try {
      const meta: YTResponse = await new YoutubeAPI(url).get()
      const { data } = await client
        .from('link')
        .insert([meta])

      return data
    } catch(error) {
      throw new Error(error)
    }
  }
}
