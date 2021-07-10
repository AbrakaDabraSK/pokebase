import { NextApiRequest, NextApiResponse } from 'next'
import Link from '../../../kernel/link'

import { 
  HTTPRequestMethods
} from '../../../types'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case HTTPRequestMethods.GET:
      try {
        const { id }: any = req.query
        const data = await new Link().byID(id)
        return res.status(200).json(data)
      } catch(error) {
        return res.status(500).json({error})
      }
    default:
      return res.status(405).end() // Method Not Allowed
  }
}
