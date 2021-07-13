import { NextApiRequest, NextApiResponse } from 'next'
import ListOfLinks from '../../../kernel/listOfLinks'

import { 
  HTTPRequestMethods
} from '../../../enums'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case HTTPRequestMethods.GET:
      try {
        const count:number = await new ListOfLinks().total()
        return res.status(200).json({count})
      } catch(error) {
        return res.status(500).json({ message: error.message })
      }
    default:
      return res.status(405).end() // Method Not Allowed
  }
}
