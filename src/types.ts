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
  createdAt: number,
  updatedAt: number
}
export interface NewsFeedCardProps {
  poke: Poke
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
