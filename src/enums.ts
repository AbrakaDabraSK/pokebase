/**
* Request
*/
export enum HTTPRequestMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE"
}

/**
* Database
*/
export enum Direction {
  ASC = "ASC",
  DESC = "DESC"
}

/**
* Entity
*/

/** Link **/
export enum LinkColumns {
  id = "id",
  identifier = "identifier",
  slug = "slug",
  url = "url",
  domain = "domain",
  title = "title",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
export enum LinkColumnsLength {
  title = 255,
  desc = 555
}
