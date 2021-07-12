import { NextApiRequest, NextApiResponse } from 'next'

import { 
  HTTPRequestMethods
} from '../../../../../../enums'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case HTTPRequestMethods.GET:
      try {
        
        return res.status(200).json([])
      } catch(error) {
        return res.status(500).json({ message: error.message })
      }
    default:
      return res.status(405).end() // Method Not Allowed
  }
}
