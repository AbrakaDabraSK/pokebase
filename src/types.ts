/**
* Page
*/

/** ShareLink */
export interface ShareLinkPageProps {
  link: Link,
  error: string
}

/**
* Component
*/

/* LinkCard */
export interface LinkCardProps {
  link: Link
}
export interface LinkCardHeaderProps {
  link: Link
}
export interface LinkCardYoutubeProps {
  link: Link
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
export interface LinkCardHyperLinkProps {
  id: string,
  url: string,
  children?: any
}
export interface LinkCardShareLinkProps {
  link: Link
}
export interface LinkCardCommentLinkProps {
  link: Link
}

/* Pagination */
export interface PaginationProps {
  count: number
  perPage: number
  currentPage: number
  setCurrentPage: Function
}

/**
* Context
*/

/* Default */
export interface ContextAction {
  type: string
  payload: any
}

/* Observer */
export interface ObserverContextState {
  loading: boolean
  more: boolean,
  data: Array<any>
  after: 0
}

/* YoutubeModal */
export interface YoutubeModalContextState {
  isPlayed: boolean,
  url: string
}

/**
* Entity
*/

/* Link */
export interface Link {
  id: string,
  identifier: string,
  slug: string,
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

/* Auth */
export interface AuthInterface {
  signIn: Function
}

/* Link */
export interface LinkInterface {
  tableName: string,
  hasURL: Function,
  byID: Function,
  create: Function,
  clicked: Function
}
export interface LinkIndexInterface {
  indexName: string,
  index: any,
  attr: Array<string>
  search: Function,
  create: Function,
  update: Function,
  delete: Function
}
/* ListOfLinks */
export interface ListOfLinksInterface {
  tableName: string,
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
