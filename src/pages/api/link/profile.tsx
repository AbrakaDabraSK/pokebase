import { NextApiRequest, NextApiResponse } from 'next'

import { 
  HTTPRequestMethods
} from '../../../enums'

// @kernel
import Link from '../../../kernel/link'

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
    case HTTPRequestMethods.GET:
      try {
        const { identifier, domain, slug }: any = req.query

        const data = await new Link().byRoute(identifier, domain, slug)
        
        return res.status(200).json(data)
      } catch(error) {
        return res.status(500).json({error})
      }
    default:
      return res.status(405).end() // Method Not Allowed
  }
}
