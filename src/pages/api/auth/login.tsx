import { NextApiRequest, NextApiResponse } from 'next'

import { 
  HTTPRequestMethods
} from '../../../enums'

// @helpers
import {
  validEmail
} from '../../../utils/helpers'

// @kernel
import Auth from '../../../kernel/auth'

/**
 *
 *
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @return {*} 
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case HTTPRequestMethods.POST:
      try {
        const { email } = req.body

        if (!validEmail(email)) { return res.status(400).json({ message: 'Enter a valid email' }) }

        await new Auth().signIn(email)
        
        return res.status(201).json({ message: 'OK' })
      } catch(error) {
        return res.status(500).json({ message: error.message })
      }
    default:
      return res.status(405).end() // Method Not Allowed
  }
}
