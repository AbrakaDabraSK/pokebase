import Request from '../utils/request'
import HtmlContentParser from '../utils/htmlContentParser'

import {
  getDomainFromURL
} from '../utils/helpers'

import { 
  CrawlerLinkResponse
} from '../types'

export default class Crawler {
  async link(url: string) {
    try {
      const htmlContent = await new Request().getHTMLContent(url)
      const parseContent = new HtmlContentParser(htmlContent)

      const data: CrawlerLinkResponse = {
        url,
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
