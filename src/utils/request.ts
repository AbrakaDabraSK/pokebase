import axios from 'axios'

/**
 *
 *
 * @export
 * @class Request
 */
export default class Request {
  /**
   * 
   * @param url 
   * @returns 
   */
  public async getHTMLContent(url: string) {
    try {
      const res = await axios({
        url,
        method: 'get',
        headers: { 'User-Agent': process.env.USER_AGENT }
      })
      
      return res.data
    } catch(error) {
      throw new Error(error)
    }
  }
}
