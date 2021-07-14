/**
* Component
*/

/* LinkCard */
export interface LinkCardProps {
  poke: Poke
}
export interface LinkCardMetaProps {
  createdAt: number, 
  updatedAt: number, 
  totalClicks: number 
}
export interface LinkCardMetaPostedByProps {
  createdAt: number
}
export interface LinkCardMetaLastViewedProps {
  updatedAt: number
}
export interface LinkCardMetaPokesProps {
  totalClicks: number
}

/* LinkCard */
export interface PaginationProps {
  count: number
  perPage: number
  currentPage: number
  setCurrentPage: Function
}

/**
* Context
*/

/* Observer */
export interface ObserverContextState {
  loading: boolean
  more: boolean,
  data: Array<any>
  after: 0
}
export interface ObserverContextAction {
  type: string
  payload: any
}

/**
* Entity
*/

/* Poke */
export interface Poke {
  id: string,
  url: string,
  domain: string
  image: string
  title: string
  desc: string
  keywords: string,
  totalClicks: number,
  createdAt: number,
  updatedAt: number
}

/**
* Kernel
*/

/* Link */
export interface LinkInterface {
  indexName: string
}
export interface LinkIndexInterface {
  indexName: string,
  terms: string
}
/* ListOfLinks */
export interface ListOfLinksInterface {
  total: Function,
  get: Function
}

/**
* Util
*/

/* YoutubeAPI */
export interface YoutubeAPIInterface {
  key: string
}
export interface YTResponse {
  url: string,
  domain: string,
  image: string,
  title: string,
  desc: string,
  keywords: string
}

/* HtmlContentParser */
export interface HtmlContentParserInterface {
  $: any
}

/* Crawler */
export interface CrawlerLinkResponse {
  url: string,
  domain: string,
  image: string,
  title: string,
  desc: string,
  keywords: string
}
