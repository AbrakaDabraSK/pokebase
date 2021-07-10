import client from '../client'
import Crawler from '../utils/crawler'

import { 
  CrawlerLinkResponse
} from '../types'

export default class Link {
  async hasURL(url: string) {
    try {
      const { data } = await client
        .from('link')
        .select("id")
        .eq('url', url)
        .range(0, 1)

      return 1 === data.length
    } catch(error) {
      throw new Error(error)
    }
  }

  async byID(id: string) {
    try {
      const { data } = await client
        .from('link')
        .select('*')

      return data
    } catch(error) {
      return error.message
    }
  }

  async create(url: string) {
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
}
