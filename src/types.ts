export enum HTTPRequestMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE"
}
export interface LinkEntityInterface {
  url: string
}
export interface CrawlerInterface {
  url: string
}
export interface CrawlerLinkResponse {
  url: string
}
