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
  async hasURL(url: string) {
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

  async byID(id: string) {
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

  async create(url: string) {
    if (getDomainFromURL(url) === process.env.YOUTUBE_DOMAIN)
      return await this.createYoutube(url)

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

  async createYoutube(url: string) {
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
