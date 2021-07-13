import sanitizer from 'string-sanitizer'
import searchClient from '../searchClient'

import { 
  LinkIndexInterface
} from '../types'

export default class LinkIndex implements LinkIndexInterface {
  readonly attr: Array<string> = ['id', 'url', 'image', 'title']
  readonly indexName: string = 'link'
  readonly terms: string = ''

  constructor(terms: string) {
    this.terms = terms;
  }

  public async search() {
    try {
      const parsedTerms = sanitizer.sanitize.keepSpace(this.terms)
      const index = searchClient.initIndex(this.indexName)
      const { hits } = await index.search(parsedTerms, {
        attributesToRetrieve: this.attr,
        hitsPerPage: 50,
      })

      return hits??[]
    } catch(error) {
      throw new Error(error)
    }
  }
}
