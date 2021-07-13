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