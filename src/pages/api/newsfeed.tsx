import { NextApiRequest, NextApiResponse } from 'next'
import ListOfLinks from '../../kernel/listOfLinks'

import { 
  HTTPRequestMethods
} from '../../enums'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case HTTPRequestMethods.GET:
      try {
        const data = await new ListOfLinks().get(0,12)

        return res.status(200).json(data)
      } catch(error) {
        return res.status(500).json({ message: error.message })
      }
    default:
      return res.status(405).end() // Method Not Allowed
  }
}
