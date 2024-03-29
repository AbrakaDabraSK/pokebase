import { NextApiRequest, NextApiResponse } from 'next'

import { 
  HTTPRequestMethods
} from '../../../../enums'

// @kernel
import Link from '../../../../kernel/link'

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
        const { id }: any = req.query
        
        await new Link().clicked(id)

        return res.status(200).json({ message: "OK" })
      } catch(error) {
        return res.status(500).json({ message: error })
      }
    default:
      return res.status(405).end() // Method Not Allowed
  }
}
