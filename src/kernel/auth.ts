import database from '../database'

import { 
  AuthInterface
} from '../types'

/**
 *
 *
 * @export
 * @class Auth
 * @implements {AuthInterface}
 */
export default class Auth implements AuthInterface {
  /**
   * 
   * @param email 
   */
  public async signIn(email: string) {
    try {
      const { error } = await database.auth.signIn({ email })
      
      if (error) throw error
    } catch(error) {
      throw new Error(error)
    }
  }
}
