import psl from 'psl'

/**
 * 
 * @param url 
 * @returns 
 */
export function getDomainFromURL(url: string): string {
  let hostname = ''
  if (url.indexOf('//') > -1) {
    hostname = url.split('/')[2]
  } else {
    hostname = url.split('/')[0]
  }
  hostname = hostname.split(':')[0]
  hostname = hostname.split('?')[0]
  return psl.get(hostname)
}
/**
 * 
 * @param currentPage 
 * @param perPage 
 * @returns 
 */
export function startIndex(currentPage: number, perPage: number): number {
  let startIndex: number = ((currentPage * perPage) - perPage) + 1
      startIndex = 1 === startIndex ? 0 : startIndex

  return startIndex
}
/**
 * 
 * @param currentPage 
 * @param perPage 
 * @returns 
 */
export function endIndex(currentPage: number, perPage: number): number {
  const endIndex: number = (currentPage * perPage)

  return endIndex
}
/**
 * 
 * @param str 
 * @param length 
 * @returns 
 */
export function truncate(str: string, length: number): string {
  return str.length > length ? str.substring(0, length) + "..." : str;
}
/**
 * @doc https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 * @param length 
 * @returns 
 */
export function makeId(length: number): string {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
/**
 * @doc https://gist.github.com/codeguy/6684588#gistcomment-2759673
 * @param str 
 * @returns 
 */
export function slugify(str: string): string {
  str = normalize(str)
  str = str.trim()
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  const from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;'
  const to = 'aaaaaaeeeeiiiioooouuuunc------'

  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  return str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes
    .replace(/^-+/, '') // trim - from start of text
    .replace(/-+$/, '') // trim - from end of text
    .replace(/-/g, '_')
}
/**
 * 
 * @doc https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
 * @param str 
 * @returns 
 */
export function normalize(str: string): string  {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}