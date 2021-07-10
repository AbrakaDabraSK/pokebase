import cheerio from 'cheerio'
import {
  HtmlContentParserInterface
} from '../types'

export default class HtmlContentParser implements HtmlContentParserInterface {
  readonly $: any

  constructor(htmlContent: string) {
    this.$ = cheerio.load(htmlContent);
  }

  metaImage(): string {
    if (this.$('meta[property="og:image"]').attr('content')) {
      return this.$('meta[property="og:image"]').attr('content').trim()
    }
    if (this.$('meta[property="twitter:image"]').attr('content')) {
      return this.$('meta[property="twitter:image"]').attr('content').trim()
    }
    if (this.$('meta[itemprop="image"]').attr('content')) {
      return this.$('meta[itemprop="image"]').attr('content').trim()
    }
    return ''
  }

  metaTitle(): string {
    if (this.$('title').text().trim()) {
      return this.$('title').text().trim()
    }
    if (this.$('meta[property="og:title"]').attr('content')) {
      return this.$('meta[property="og:title"]').attr('content').trim()
    }
    if (this.$('meta[property="twitter:title"]').attr('content')) {
      return this.$('meta[property="twitter:title"]').attr('content').trim()
    }
    if (this.$('meta[itemprop="title"]').attr('content')) {
      return this.$('meta[itemprop="title"]').attr('content').trim()
    }
    return ''
  }

  metaDesc(): string {
    if (this.$('meta[name="description"]').attr('content')) {
      return this.$('meta[name="description"]').attr('content').trim()
    }
    if (this.$('meta[property="og:description"]').attr('content')) {
      return this.$('meta[property="og:description"]').attr('content').trim()
    }
    if (this.$('meta[property="twitter:description"]').attr('content')) {
      return this.$('meta[property="twitter:description"]').attr('content').trim()
    }
    if (this.$('meta[itemprop="description"]').attr('content')) {
      return this.$('meta[itemprop="description"]').attr('content').trim()
    }
    return ''
  }

  metaKeywords() {
    if (this.$('meta[name="keywords"]').attr('content')) {
      return this.$('meta[name="keywords"]').attr('content').trim()
    }
    if (this.$('meta[itemprop="keywords"]').attr('content')) {
      return this.$('meta[itemprop="keywords"]').attr('content').trim()
    }
    return ''
  }
}
