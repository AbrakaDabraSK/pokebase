import axios from 'axios'

import {
  YoutubeAPIInterface,
  YTResponse
} from '../types'

export default class YoutubeAPI implements YoutubeAPIInterface {
  readonly key: string

  constructor(url: string) {
    this.key = url.match(/(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/)[1]
  }

  async get() {
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

  private api(): string {
    return process.env.YOUTUBE_ENDPOINT+this.key+'&key='+process.env.YOUTUBE_API_KEY
  }

  private url(): string {
    return process.env.YOUTUBE_BASE_URL+this.key
  }

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

  private title(data: any): string {
    return data.items[0].snippet.title
  }

  private desc(data: any): string {
    return data.items[0].snippet.description
  }

  private tags(data: any): string {
    const tags = data.items[0].snippet.tags
    return typeof tags === "undefined" ? '' : tags.join(',')
  }
}
