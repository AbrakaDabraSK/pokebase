export enum HTTPRequestMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE"
}
export interface LinkEntity {
  id: number,
  url: string,
  domain: string,
  image: string,
  title: string,
  desc: string,
  keywords: string
}
export interface CrawlerLinkResponse {
  url: string,
  domain: string,
  image: string,
  title: string,
  desc: string,
  keywords: string
}
export interface HtmlContentParserInterface {
  $: any
}
