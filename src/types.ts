export interface HtmlContentParserInterface {
  $: any
}
export interface CrawlerLinkResponse {
  url: string,
  domain: string,
  image: string,
  title: string,
  desc: string,
  keywords: string
}
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
export interface NewsFeedCardProps {
  poke: Poke,
  revalidate?: Function
}
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
export interface LinkInterface {
  indexName: string
}
export interface LinkIndexInterface {
  indexName: string,
  terms: string
}
export interface NewsFeedCardMetaProps {
  createdAt: number, 
  updatedAt: number, 
  totalClicks: number 
}
