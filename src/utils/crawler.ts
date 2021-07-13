import Request from '../utils/request'
import HtmlContentParser from '../utils/htmlContentParser'

import {
  getDomainFromURL
} from '../utils/helpers'

import { 
  CrawlerLinkResponse
} from '../types'

export default class Crawler {
  /**
   * 
   * @param url 
   * @returns 
   */
  public async link(url: string) {
    try {
      const htmlContent = await new Request().getHTMLContent(url)
      const parseContent = new HtmlContentParser(htmlContent)
      const parsedURL = (url[url.length - 1] === '/') ? url.slice(0, -1) : url
      const data: CrawlerLinkResponse = {
        url: parsedURL,
        domain: getDomainFromURL(url),
        image: parseContent.metaImage(),
        title: parseContent.metaTitle(),
        desc: parseContent.metaDesc(),
        keywords: parseContent.metaKeywords()
      }
      return data
    } catch(error) {
      throw new Error(error)
    }
  }
}
